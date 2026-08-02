import { describe, it, expect, vi } from 'vitest';
import { resolveLang } from './shiki';

vi.mock('shiki/core', () => ({
  createHighlighterCore: vi.fn().mockResolvedValue({
    codeToHtml: vi.fn().mockReturnValue('<pre><code>code</code></pre>')
  })
}));

vi.mock('shiki/engine/javascript', () => ({
  createJavaScriptRegexEngine: vi.fn().mockReturnValue({})
}));

describe('resolveLang', () => {
  it('サポートされている言語をそのまま返す', () => {
    expect(resolveLang('typescript')).toBe('typescript');
    expect(resolveLang('javascript')).toBe('javascript');
    expect(resolveLang('python')).toBe('python');
  });

  it('サポートされていない言語は plaintext を返す', () => {
    expect(resolveLang('cobol')).toBe('plaintext');
    expect(resolveLang('unknown-lang')).toBe('plaintext');
  });

  it('undefined の場合は plaintext を返す', () => {
    expect(resolveLang(undefined)).toBe('plaintext');
  });

  it('空文字の場合は plaintext を返す', () => {
    expect(resolveLang('')).toBe('plaintext');
  });

  it('shell エイリアスを返す', () => {
    expect(resolveLang('shell')).toBe('shell');
    expect(resolveLang('bash')).toBe('bash');
    expect(resolveLang('sh')).toBe('sh');
  });

  it('jsonc を返す', () => {
    expect(resolveLang('jsonc')).toBe('jsonc');
  });

  it('plaintext を返す', () => {
    expect(resolveLang('plaintext')).toBe('plaintext');
  });
});

describe('getHighlighter', () => {
  it('同じインスタンスを返す（シングルトン）', async () => {
    const { getHighlighter } = await import('./shiki');
    const h1 = getHighlighter();
    const h2 = getHighlighter();
    expect(h1).toBe(h2);
  });
});
