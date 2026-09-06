import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { Window, type HTMLAnchorElement } from 'happy-dom';
import { loadCatalog } from '../src/lib/catalog';

describe('generated static pages', () => {
  for (const [locale, path] of [['en', '../dist/index.html'], ['zh', '../dist/zh/index.html']] as const) {
    test(`${locale} contains the full directory and accessible controls before JavaScript runs`, () => {
      const html = readFileSync(new URL(path, import.meta.url), 'utf8');
      const win = new Window();
      win.document.write(html);
      expect(win.document.documentElement.lang).toBe(locale === 'zh' ? 'zh-CN' : 'en');
      expect(win.document.title).toContain('Awesome Pi');
      expect(win.document.querySelectorAll('h1')).toHaveLength(1);
      expect(win.document.querySelector('meta[name="description"]')?.getAttribute('content')?.length).toBeGreaterThan(30);
      const canonical = win.document.querySelector('link[rel="canonical"]')?.getAttribute('href');
      expect(canonical).toBe(`https://awesome-pi-list.vercel.app/${locale === 'zh' ? 'zh/' : ''}`);
      const socialImage = 'https://awesome-pi-list.vercel.app/og-image-v2.png';
      expect(win.document.querySelector('meta[property="og:image"]')?.getAttribute('content')).toBe(socialImage);
      const image = readFileSync(new URL('../dist/og-image-v2.png', import.meta.url));
      expect(image.subarray(0, 8).toString('hex')).toBe('89504e470d0a1a0a');
      expect(win.document.querySelector('meta[property="og:image:width"]')?.getAttribute('content')).toBe(String(image.readUInt32BE(16)));
      expect(win.document.querySelector('meta[property="og:image:height"]')?.getAttribute('content')).toBe(String(image.readUInt32BE(20)));
      expect(win.document.querySelector('meta[property="og:image:type"]')?.getAttribute('content')).toBe('image/png');
      expect(win.document.querySelector('meta[property="og:image:alt"]')?.getAttribute('content')).toContain('Awesome Pi');
      expect(win.document.querySelector('meta[name="twitter:card"]')?.getAttribute('content')).toBe('summary_large_image');
      expect(win.document.querySelector('meta[name="twitter:image"]')?.getAttribute('content')).toBe(socialImage);
      for (const link of win.document.querySelectorAll('link[rel="alternate"]')) expect(link.getAttribute('href')).toStartWith('https://');
      expect(win.document.querySelector('label[for="search"]')).not.toBeNull();
      expect(win.document.querySelector('label[for="mobile-category"]')).not.toBeNull();
      expect(win.document.querySelector('[data-language]')?.getAttribute('href')).toBe(locale === 'en' ? '/zh/' : '/');
      expect(win.document.querySelector('.github-link')?.getAttribute('aria-label')).toBe('GitHub');
      expect(win.document.querySelector('footer a[href="https://github.com/BubblePtr/awesome-pi/issues/new"]')).not.toBeNull();
      const catalog = loadCatalog();
      expect(win.document.querySelectorAll('[data-resource]').length).toBe(catalog.resources.length);
      for (const resource of catalog.resources) {
        const row = win.document.getElementById(resource.id)!;
        expect(row).not.toBeNull();
        expect(row.querySelector<HTMLAnchorElement>('h3 a')?.getAttribute('href')).toBe(resource.url);
        expect(row.querySelector('[data-copy]')?.getAttribute('data-copy') ?? null).toBe(resource.install);
        for (const description of resource.descriptions[locale]) expect(row.textContent).toContain(description);
      }
      win.happyDOM.abort();
    });
  }
});
