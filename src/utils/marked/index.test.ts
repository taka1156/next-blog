import { describe, it, expect, vi } from 'vitest';

vi.mock('./shiki', () => ({
  getHighlighter: vi.fn().mockResolvedValue({
    codeToHtml: vi.fn().mockReturnValue('<pre><code>code</code></pre>')
  }),
  resolveLang: vi.fn().mockImplementation((lang?: string) => lang ?? 'plaintext')
}));

vi.mock('marked-shiki', () => ({
  default: vi.fn().mockReturnValue({})
}));

describe('markedWrap', () => {
  it('マークダウンを HTML に変換する', async () => {
    const { markedWrap } = await import('./index');
    const { htmlText } = await markedWrap('**太字**');
    expect(htmlText).toContain('<strong>');
  });

  it('h2 見出しから TOC エントリを生成する', async () => {
    const { markedWrap } = await import('./index');
    const { tocs } = await markedWrap('## セクション1\n\n## セクション2');
    expect(tocs).toHaveLength(2);
    expect(tocs[0].escapedText).toBe('セクション1');
    expect(tocs[1].escapedText).toBe('セクション2');
  });

  it('h2 以外の見出しは TOC に含まれない', async () => {
    const { markedWrap } = await import('./index');
    const { tocs } = await markedWrap('# h1\n\n### h3');
    expect(tocs).toHaveLength(0);
  });

  it('anchorPrefix が TOC のアンカーに付与される', async () => {
    const { markedWrap } = await import('./index');
    const { tocs } = await markedWrap('## テスト', 'prefix_');
    expect(tocs[0].anchor).toMatch(/^prefix_/);
  });

  it('空文字列を渡したとき tocs が空・htmlText が空文字列になる', async () => {
    const { markedWrap } = await import('./index');
    const { tocs, htmlText } = await markedWrap('');
    expect(tocs).toHaveLength(0);
    expect(htmlText).toBe('');
  });

  it('TOC の index は 1 始まりで連番になる', async () => {
    const { markedWrap } = await import('./index');
    const { tocs } = await markedWrap('## A\n\n## B\n\n## C');
    expect(tocs.map((t) => t.index)).toEqual([1, 2, 3]);
  });
});
