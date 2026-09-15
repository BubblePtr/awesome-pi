import { readFileSync } from 'node:fs';
import type { Locale, Resource } from './catalog';

export type GitHubStats = { stars: number };
export type NpmStats = { weekly: number; trend: number | null };
export type StatsSnapshot = {
  generatedAt: string;
  github: Record<string, GitHubStats>;
  npm: Record<string, NpmStats>;
};
export type ResourceStats = {
  repo: string | null; package: string | null;
  stars: number | null; weekly: number | null; trend: number | null;
};

export function githubRepo(url: string): string | null {
  let parsed: URL;
  try { parsed = new URL(url); } catch { return null; }
  if (parsed.hostname !== 'github.com') return null;
  const segments = parsed.pathname.split('/').filter(Boolean);
  if (segments.length < 2) return null;
  const [owner, repo] = [segments[0], segments[1].replace(/\.git$/, '')];
  if (!/^[A-Za-z0-9-]+$/.test(owner) || !/^[\w.-]+$/.test(repo)) return null;
  return `${owner}/${repo}`;
}

export function npmPackage(install: string | null): string | null {
  if (!install) return null;
  const command = /^(?:pi install npm:|npm install (?:-g )?)(\S+)$/.exec(install);
  const name = command?.[1] ?? '';
  return /^(?:@[a-z0-9][\w.-]*\/)?[a-z0-9][\w.-]*$/i.test(name) ? name : null;
}

export function weeklyTrend(days: number[]): NpmStats | null {
  if (days.length < 14) return null;
  const sum = (values: number[]) => values.reduce((total, value) => total + value, 0);
  const prior = sum(days.slice(-14, -7));
  const weekly = sum(days.slice(-7));
  return { weekly, trend: prior > 0 ? Math.round(((weekly - prior) / prior) * 100) : null };
}

export function formatCount(value: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === 'zh' ? 'zh-CN' : 'en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(value);
}

export function emptySnapshot(): StatsSnapshot {
  return { generatedAt: '', github: {}, npm: {} };
}

export function parseSnapshot(text: string): StatsSnapshot {
  const raw = JSON.parse(text) as Partial<StatsSnapshot>;
  return { generatedAt: raw.generatedAt ?? '', github: raw.github ?? {}, npm: raw.npm ?? {} };
}

export function readSnapshot(path: string | URL): StatsSnapshot {
  let text: string;
  try { text = readFileSync(path, 'utf8'); }
  catch (error) {
    if ((error as { code?: string }).code === 'ENOENT') return emptySnapshot();
    throw error;
  }
  return parseSnapshot(text);
}

export function loadStats(): StatsSnapshot {
  return readSnapshot(new URL('../data/stats.json', import.meta.url));
}

export function statsFor(resource: Resource, snapshot: StatsSnapshot): ResourceStats {
  const repo = githubRepo(resource.url);
  const pkg = npmPackage(resource.install);
  const github = repo ? snapshot.github[repo] : undefined;
  const npm = pkg ? snapshot.npm[pkg] : undefined;
  return { repo, package: pkg, stars: github?.stars ?? null, weekly: npm?.weekly ?? null, trend: npm?.trend ?? null };
}
