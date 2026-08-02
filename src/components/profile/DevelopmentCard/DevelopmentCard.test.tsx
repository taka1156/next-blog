import { describe, it, expect, vi, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DevelopmentCard } from './DevelopmentCard';

const dummyArticle: ArticleElement = {
  summary: {
    slug: 'dummy-project',
    title: 'ダミープロジェクト',
    thumbnail: 'https://placehold.jp/300x200.png',
    description: 'テスト用の説明文です。',
    category: { name: 'web', image: 'https://placehold.jp/150x150.png', posts: [] },
    tags: [
      { name: 'react', image: 'https://placehold.jp/150x150.png', posts: [] },
      { name: 'typescript', image: 'https://placehold.jp/150x150.png', posts: [] }
    ],
    created_at: '2024-01-01',
    updated_at: '2024-06-01'
  },
  content: '## 概要\nテストコンテンツ'
};

vi.mock('@/components/shared/BaseImg/BaseImg', () => ({
  BaseImg: ({ alt }: { alt: string }) => <img alt={alt} />
}));

vi.mock('@/components/shared/BaseHeading/BaseHeading', () => ({
  BaseHeading: ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>
}));

vi.mock('@/components/shared/BaseText/BaseText', () => ({
  BaseText: ({ children }: { children: React.ReactNode }) => <p>{children}</p>
}));

vi.mock('@/components/shared/ArticleBody/ArticleBody', () => ({
  ArticleBody: () => <div data-testid='article-body' />
}));

vi.mock('@/components/blog/ArticleCategory/ArticleCategory', () => ({
  ArticleCategory: ({ category }: { category: ArticleClassified }) => (
    <span>{category.name}</span>
  )
}));

vi.mock('@/components/blog/ArticleTag/ArticleTag', () => ({
  ArticleTag: ({ tags }: { tags: ArticleClassified[] }) => (
    <ul>
      {tags.map((t) => (
        <li key={t.name}>{t.name}</li>
      ))}
    </ul>
  )
}));

describe('DevelopmentCard', () => {
  // jsdom は showModal / close を実装していないためモックする
  beforeAll(() => {
    HTMLDialogElement.prototype.showModal = vi.fn(function (
      this: HTMLDialogElement
    ) {
      this.setAttribute('open', '');
    });
    HTMLDialogElement.prototype.close = vi.fn(function (this: HTMLDialogElement) {
      this.removeAttribute('open');
    });
  });

  it('カード本体とダイアログの両方にタイトルを描画する', () => {
    render(<DevelopmentCard index={0} article={dummyArticle} />);
    // figcaption の heading と dialog header の heading の 2 箇所に表示される
    expect(screen.getAllByText(dummyArticle.summary.title)).toHaveLength(2);
  });

  it('サムネイル画像を描画する', () => {
    render(<DevelopmentCard index={0} article={dummyArticle} />);
    expect(
      screen.getByAltText(`${dummyArticle.summary.title}の画像`)
    ).toBeInTheDocument();
  });

  it('description がある場合は説明文を表示する', () => {
    render(<DevelopmentCard index={0} article={dummyArticle} />);
    expect(screen.getByText(dummyArticle.summary.description!)).toBeInTheDocument();
  });

  it('description がない場合は説明文を表示しない', () => {
    const noDesc: ArticleElement = {
      ...dummyArticle,
      summary: { ...dummyArticle.summary, description: undefined }
    };
    render(<DevelopmentCard index={0} article={noDesc} />);
    expect(screen.queryByText('テスト用の説明文です。')).not.toBeInTheDocument();
  });

  it('"詳細" ボタンをクリックすると showModal が呼ばれる', async () => {
    const user = userEvent.setup();
    render(<DevelopmentCard index={0} article={dummyArticle} />);
    await user.click(screen.getByRole('button', { name: '詳細' }));
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
  });

  it('"×" ボタンをクリックすると close が呼ばれる', async () => {
    const user = userEvent.setup();
    render(<DevelopmentCard index={0} article={dummyArticle} />);
    await user.click(screen.getByRole('button', { name: '詳細' }));
    await user.click(screen.getByRole('button', { name: '×' }));
    expect(HTMLDialogElement.prototype.close).toHaveBeenCalled();
  });

  it('ダイアログ内に ArticleBody を描画する', async () => {
    const user = userEvent.setup();
    render(<DevelopmentCard index={0} article={dummyArticle} />);
    await user.click(screen.getByRole('button', { name: '詳細' }));
    expect(screen.getByTestId('article-body')).toBeInTheDocument();
  });
});
