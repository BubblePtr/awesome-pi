import { afterEach, describe, expect, test } from 'bun:test';
import { Window, type HTMLInputElement, type HTMLSelectElement, type HTMLButtonElement, type HTMLAnchorElement, type HTMLElement } from 'happy-dom';
import { initializeDirectory } from '../src/scripts/directory';

const windows: Window[] = [];
function setup(path = '/') {
  const win = new Window({ url: `https://example.com${path}` });
  windows.push(win);
  win.document.body.innerHTML = `
    <main data-directory data-locale="en" data-total="2">
      <input id="search" type="search"><button id="clear-search">Clear</button>
      <select id="mobile-category"><option value="all">All</option><option value="web-access-search">Web</option><option value="themes">Themes</option></select>
      <a data-category="all" href="/">All resources</a><a data-category="web-access-search" href="?category=web-access-search">Web</a><a data-category="themes" href="?category=themes">Themes</a>
      <h2 id="results-heading">All resources</h2><span id="result-count"></span>
      <p id="empty-state" hidden>No results <button data-reset>Reset</button></p>
      <a data-language href="/zh/">中文</a>
      <article data-resource data-kind="packages" data-categories="web-access-search" data-search="search brave 网页 web access search"><button data-copy="pi install npm:search"><span data-copy-label>Copy</span></button></article>
      <article data-resource data-kind="themes" data-categories="dark-themes" data-search="theme dark"><button data-copy="pi install npm:theme"><span data-copy-label>Copy</span></button></article>
      <p id="copy-status" role="status"></p>
    </main>`;
  initializeDirectory(win.document as unknown as Document, win as unknown as globalThis.Window);
  return win;
}
afterEach(() => { for (const win of windows.splice(0)) win.happyDOM.abort(); });

describe('directory interactions', () => {
  test('restores a shared search and category on first load and keeps them when switching language', () => {
    const win = setup('/?q=Brave&category=web-access-search');
    expect(win.document.querySelector<HTMLInputElement>('#search')!.value).toBe('Brave');
    expect(win.document.querySelectorAll('[data-resource]:not([hidden])').length).toBe(1);
    expect(win.document.querySelector<HTMLAnchorElement>('[data-language]')!.href).toBe('https://example.com/zh/?q=Brave&category=web-access-search');
  });
  test('filters immediately, handles empty results, and clears both controls', () => {
    const win = setup();
    const input = win.document.querySelector<HTMLInputElement>('#search')!;
    input.value = 'missing';
    input.dispatchEvent(new win.Event('input'));
    expect(win.document.querySelector<HTMLElement>('#empty-state')!.hidden).toBe(false);
    expect(win.location.search).toBe('?q=missing');
    win.document.querySelector<HTMLButtonElement>('[data-reset]')!.click();
    expect(input.value).toBe('');
    expect(win.document.querySelectorAll('[data-resource]:not([hidden])').length).toBe(2);
    expect(win.location.search).toBe('');
  });
  test('category links and the mobile selector apply filters and update the selected state', () => {
    const win = setup();
    win.document.querySelector<HTMLAnchorElement>('[data-category="themes"]')!.click();
    expect(win.document.querySelectorAll('[data-resource]:not([hidden])').length).toBe(1);
    expect(win.document.querySelector('[data-category="themes"]')!.getAttribute('aria-current')).toBe('true');
    const select = win.document.querySelector<HTMLSelectElement>('#mobile-category')!;
    expect(select.value).toBe('themes');
    select.value = 'all';
    select.dispatchEvent(new win.Event('change'));
    expect(win.document.querySelectorAll('[data-resource]:not([hidden])').length).toBe(2);
  });
  test('restores search and category when navigating back', () => {
    const win = setup();
    win.history.replaceState(null, '', '/?q=theme&category=themes');
    win.dispatchEvent(new win.PopStateEvent('popstate'));
    expect(win.document.querySelector<HTMLInputElement>('#search')!.value).toBe('theme');
    expect(win.document.querySelectorAll('[data-resource]:not([hidden])').length).toBe(1);
  });
  test('copies the exact command and announces success only after the clipboard write completes', async () => {
    const win = setup();
    const copied: string[] = [];
    Object.defineProperty(win.navigator, 'clipboard', { configurable: true, value: { writeText: async (value: string) => { copied.push(value); } } });
    win.document.querySelector<HTMLButtonElement>('[data-copy]')!.click();
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(copied).toEqual(['pi install npm:search']);
    expect(win.document.querySelector('[data-copy-label]')!.textContent).toBe('Copied');
    expect(win.document.querySelector('#copy-status')!.textContent).toContain('copied');
  });
  test('reports clipboard failure with a manual-copy instruction', async () => {
    const win = setup();
    Object.defineProperty(win.navigator, 'clipboard', { configurable: true, value: { writeText: async () => { throw new Error('denied'); } } });
    win.document.querySelector<HTMLButtonElement>('[data-copy]')!.click();
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(win.document.querySelector('[data-copy-label]')!.textContent).toBe('Copy');
    expect(win.document.querySelector('#copy-status')!.textContent).toContain('manually');
  });
  test('dismisses temporary copy feedback instead of leaving a permanent toast', async () => {
    const win = setup();
    const callbacks: Array<() => void> = [];
    win.setTimeout = callback => { callbacks.push(() => callback()); return setTimeout(() => {}, 0); };
    Object.defineProperty(win.navigator, 'clipboard', { configurable: true, value: { writeText: async () => {} } });
    win.document.querySelector<HTMLButtonElement>('[data-copy]')!.click();
    await new Promise(resolve => setTimeout(resolve, 0));
    callbacks.forEach(callback => callback());
    expect(win.document.querySelector('#copy-status')!.textContent).toBe('');
  });
});
