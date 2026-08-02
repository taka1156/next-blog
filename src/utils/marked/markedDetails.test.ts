import { describe, it, expect } from 'vitest';
import { Marked } from 'marked';
import markedDetails from './markedDetails';

const createMarked = () => new Marked().use(markedDetails());

describe('markedDetails', () => {
  it(':::details ブロックを <details> タグに変換する', async () => {
    const marked = createMarked();
    const html = await marked.parse(':::details タイトル\n本文\n:::');
    expect(html).toContain('<details>');
    expect(html).toContain('<summary>タイトル</summary>');
    expect(html).toContain('本文');
  });

  it('{open} 修飾子で open 属性付きの <details> を生成する', async () => {
    const marked = createMarked();
    const html = await marked.parse(':::details{open} タイトル\n本文\n:::');
    expect(html).toContain('<details open>');
  });

  it('タイトルを省略した場合はデフォルトの "Details" を使う', async () => {
    const marked = createMarked();
    const html = await marked.parse(':::details\n本文\n:::');
    expect(html).toContain('<summary>Details</summary>');
  });

  it('閉じタグがない場合は <details> タグを生成しない', async () => {
    const marked = createMarked();
    const html = await marked.parse(':::details タイトル\n本文');
    expect(html).not.toContain('<details>');
  });

  it('ネストした details ブロックを処理できる', async () => {
    const marked = createMarked();
    const html = await marked.parse(
      ':::details 外側\n:::details 内側\n内側本文\n:::\n外側本文\n:::'
    );
    expect(html).toContain('内側本文');
    expect(html).toContain('外側本文');
  });

  it(':::details の前に通常テキストがあっても正しく解析する（空行で区切る）', async () => {
    const marked = createMarked();
    const html = await marked.parse(
      '通常テキスト\n\n:::details タイトル\n本文\n:::'
    );
    expect(html).toContain('通常テキスト');
    expect(html).toContain('<details>');
  });
});
