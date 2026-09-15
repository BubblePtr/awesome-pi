import { describe, expect, test } from 'bun:test';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { loadCatalog } from '../src/lib/catalog';
import { emptySnapshot, formatCount, githubRepo, npmPackage, readSnapshot, statsFor, weeklyTrend } from '../src/lib/stats';

describe('GitHub repository parsing', () => {
  test('extracts owner/repo from repository URLs including subpaths and .git suffixes', () => {
    expect(githubRepo('https://github.com/nicobailon/pi-web-access')).toBe('nicobailon/pi-web-access');
    expect(githubRepo('https://github.com/foo/bar.git')).toBe('foo/bar');
    expect(githubRepo('https://github.com/foo/bar/tree/main')).toBe('foo/bar');
  });
  test('rejects non-GitHub hosts, incomplete paths, and invalid URLs', () => {
    expect(githubRepo('https://pi.dev/packages/pi-chrome')).toBeNull();
    expect(githubRepo('https://www.npmjs.com/package/pi-kanagawa')).toBeNull();
    expect(githubRepo('https://github.com/foo')).toBeNull();
    expect(githubRepo('not a url')).toBeNull();
  });
});

describe('npm package parsing', () => {
  test('extracts package names from pi and npm install commands', () => {
    expect(npmPackage('pi install npm:pi-web-access')).toBe('pi-web-access');
    expect(npmPackage('pi install npm:@juicesharp/rpiv-web-tools')).toBe('@juicesharp/rpiv-web-tools');
    expect(npmPackage('npm install -g pi-acp')).toBe('pi-acp');
  });
  test('returns null for git installs, curl installers, and missing commands', () => {
    expect(npmPackage('pi install git:github.com/HazAT/pi-interactive-subagents')).toBeNull();
    expect(npmPackage('curl -fsSL https://omp.sh/install | sh')).toBeNull();
    expect(npmPackage(null)).toBeNull();
  });
});

describe('weekly download trend', () => {
  test('compares the last 7 days against the prior 7 days', () => {
    expect(weeklyTrend([...Array(7).fill(100), ...Array(7).fill(150)])).toEqual({ weekly: 1050, trend: 50 });
    expect(weeklyTrend([...Array(7).fill(100), ...Array(7).fill(50)])).toEqual({ weekly: 350, trend: -50 });
  });
  test('rounds percentages and reports no trend without a baseline', () => {
    expect(weeklyTrend([...Array(7).fill(3), ...Array(7).fill(4)])).toEqual({ weekly: 28, trend: 33 });
    expect(weeklyTrend([...Array(7).fill(0), ...Array(7).fill(5)])?.trend).toBeNull();
  });
  test('rejects incomplete windows', () => {
    expect(weeklyTrend(Array(10).fill(1))).toBeNull();
  });
});

describe('count formatting', () => {
  test('uses compact notation per locale', () => {
    expect(formatCount(999, 'en')).toBe('999');
    expect(formatCount(1234, 'en')).toBe('1.2K');
    expect(formatCount(1234, 'zh')).toBe('1234');
    expect(formatCount(54321, 'zh')).toBe('5.4万');
  });
});

describe('stats snapshot', () => {
  test('returns an empty snapshot when the file is missing and throws on malformed JSON', () => {
    expect(readSnapshot(join(tmpdir(), 'awesome-pi-no-such-file.json'))).toEqual(emptySnapshot());
    const directory = mkdtempSync(join(tmpdir(), 'awesome-pi-stats-'));
    const file = join(directory, 'stats.json');
    writeFileSync(file, '{broken');
    expect(() => readSnapshot(file)).toThrow();
  });
  test('round-trips a written snapshot', () => {
    const directory = mkdtempSync(join(tmpdir(), 'awesome-pi-stats-'));
    const file = join(directory, 'stats.json');
    writeFileSync(file, JSON.stringify({ generatedAt: '2026-09-15T00:00:00.000Z', github: { 'a/b': { stars: 7 } }, npm: { pkg: { weekly: 42, trend: 5 } } }));
    expect(readSnapshot(file)).toEqual({ generatedAt: '2026-09-15T00:00:00.000Z', github: { 'a/b': { stars: 7 } }, npm: { pkg: { weekly: 42, trend: 5 } } });
  });
  test('maps resources to their repository and package stats', () => {
    const catalog = loadCatalog();
    const webAccess = catalog.resources.find(resource => resource.name === 'pi-web-access')!;
    expect(statsFor(webAccess, emptySnapshot())).toEqual({ repo: 'nicobailon/pi-web-access', package: 'pi-web-access', stars: null, weekly: null, trend: null });
    const snapshot = { ...emptySnapshot(), github: { 'nicobailon/pi-web-access': { stars: 100 } }, npm: { 'pi-web-access': { weekly: 50, trend: 10 } } };
    expect(statsFor(webAccess, snapshot)).toMatchObject({ stars: 100, weekly: 50, trend: 10 });
  });
});

describe('catalog coverage', () => {
  test('every GitHub link and npm install command in the catalog maps to a stats key', () => {
    for (const resource of loadCatalog().resources) {
      if (resource.url.includes('://github.com/')) expect(githubRepo(resource.url), resource.name).not.toBeNull();
      if (resource.install?.startsWith('pi install npm:')) expect(npmPackage(resource.install), resource.name).not.toBeNull();
    }
  });
});
