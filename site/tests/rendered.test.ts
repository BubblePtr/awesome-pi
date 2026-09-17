import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { Window, type HTMLAnchorElement } from 'happy-dom';
import { loadCatalog } from '../src/lib/catalog';
import { loadStats, statsFor } from '../src/lib/stats';

describe('generated static pages', () => {
  for (const [locale, path] of [['en', '../dist/index.html'], ['zh', '../dist/zh/index.html']] as const) {
    test(`${locale} includes exactly one analytics tracker for its page route`, () => {
      const win = new Window();
      try {
        win.document.write(readFileSync(new URL(path, import.meta.url), 'utf8'));
        const trackers = win.document.querySelectorAll('vercel-analytics');
        expect(trackers).toHaveLength(1);
        expect(trackers[0]?.getAttribute('data-pathname')).toBe(locale === 'zh' ? '/zh/' : '/');
      } finally {
        win.happyDOM.abort();
      }
    });

    test(`${locale} contains the full directory and accessible controls before JavaScript runs`, () => {
      const html = readFileSync(new URL(path, import.meta.url), 'utf8');
      const win = new Window();
      win.document.write(html);
      expect(win.document.documentElement.lang).toBe(locale === 'zh' ? 'zh-CN' : 'en');
      expect(win.document.title).toContain('Pi Index');
      expect(win.document.querySelectorAll('h1')).toHaveLength(1);
      expect(win.document.querySelector('meta[name="description"]')?.getAttribute('content')?.length).toBeGreaterThan(30);
      const canonical = win.document.querySelector('link[rel="canonical"]')?.getAttribute('href');
      expect(canonical).toBe(`https://piindex.dev/${locale === 'zh' ? 'zh/' : ''}`);
      const socialImage = 'https://piindex.dev/og-image-v4.png';
      expect(win.document.querySelector('meta[property="og:image"]')?.getAttribute('content')).toBe(socialImage);
      const image = readFileSync(new URL('../dist/og-image-v4.png', import.meta.url));
      expect(image.subarray(0, 8).toString('hex')).toBe('89504e470d0a1a0a');
      expect(win.document.querySelector('meta[property="og:image:width"]')?.getAttribute('content')).toBe(String(image.readUInt32BE(16)));
      expect(win.document.querySelector('meta[property="og:image:height"]')?.getAttribute('content')).toBe(String(image.readUInt32BE(20)));
      expect(win.document.querySelector('meta[property="og:image:type"]')?.getAttribute('content')).toBe('image/png');
      expect(win.document.querySelector('meta[property="og:image:alt"]')?.getAttribute('content')).toContain('Pi Index');
      expect(win.document.querySelector('meta[name="twitter:card"]')?.getAttribute('content')).toBe('summary_large_image');
      expect(win.document.querySelector('meta[name="twitter:image"]')?.getAttribute('content')).toBe(socialImage);
      for (const link of win.document.querySelectorAll('link[rel="alternate"]')) expect(link.getAttribute('href')).toStartWith('https://');
      const ldJsonScript = win.document.querySelector('script[type="application/ld+json"]');
      expect(ldJsonScript).not.toBeNull();
      const ldJson = JSON.parse(ldJsonScript!.textContent || '{}');
      expect(ldJson['@context']).toBe('https://schema.org');
      expect(Array.isArray(ldJson['@graph'])).toBe(true);
      const websiteEntity = ldJson['@graph'].find((item: { '@type': string }) => item['@type'] === 'WebSite');
      expect(websiteEntity).toBeDefined();
      expect(websiteEntity.url).toBe('https://piindex.dev/');
      const pageEntity = ldJson['@graph'].find((item: { '@type': string }) => item['@type'] === 'CollectionPage');
      expect(pageEntity).toBeDefined();
      expect(pageEntity.url).toBe(canonical);
      expect(pageEntity.inLanguage).toBe(locale === 'zh' ? 'zh-CN' : 'en');
      expect(win.document.querySelector('label[for="search"]')).not.toBeNull();
      expect(win.document.querySelector('label[for="mobile-category"]')).not.toBeNull();
      expect(win.document.querySelector('[data-language]')?.getAttribute('href')).toBe(locale === 'en' ? '/zh/' : '/');
      expect(win.document.querySelector('.github-link')?.getAttribute('aria-label')).toBe('GitHub');
      expect(win.document.querySelector('footer a[href="https://github.com/BubblePtr/awesome-pi/issues/new"]')).not.toBeNull();
      const catalog = loadCatalog();
      const stats = loadStats();
      expect(win.document.querySelectorAll('[data-resource]').length).toBe(catalog.resources.length);
      for (const resource of catalog.resources) {
        const row = win.document.getElementById(resource.id)!;
        expect(row).not.toBeNull();
        expect(row.querySelector<HTMLAnchorElement>('h3 a')?.getAttribute('href')).toBe(resource.url);
        expect(row.querySelector('[data-copy]')?.getAttribute('data-copy') ?? null).toBe(resource.install);
        for (const description of resource.descriptions[locale]) expect(row.textContent).toContain(description);
        const metrics = statsFor(resource, stats);
        expect(row.getAttribute('data-stars')).toBe(metrics.stars === null ? null : String(metrics.stars));
        expect(row.getAttribute('data-downloads')).toBe(metrics.weekly === null ? null : String(metrics.weekly));
        expect(row.querySelector('.resource-stats') !== null).toBe(metrics.stars !== null || metrics.weekly !== null);
      }
      expect(win.document.querySelectorAll('.resource-stats').length).toBeGreaterThan(0);
      expect(win.document.querySelector('.stats-updated')).not.toBeNull();
      win.happyDOM.abort();
    });
  }
});
