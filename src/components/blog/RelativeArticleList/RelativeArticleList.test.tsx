import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RelativeArticleList } from './RelativeArticleList';
import { dummyCategoryBadge } from '@/dummy';

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
}));

vi.mock('@/components/shared/BaseText/BaseText', () => ({
  BaseText: ({ children }: { children: React.ReactNode }) => <p>{children}</p>
}));

const relatedArticles: CommonArticles = [
  {
    id: 'article-1',
    title: '関連記事1',
    summary: '',
    category: dummyCategoryBadge,
    tags: [],
    createdAt: '',
    updatedAt: ''
  },
  {
    id: 'article-2',
    title: '関連記事2',
    summary: '',
    category: dummyCategoryBadge,
    tags: [],
    createdAt: '',
    updatedAt: ''
  }
];

describe('RelativeArticleList', () => {
  it('「関連記事: カテゴリ名」の見出しを表示する', () => {
    render(
      <RelativeArticleList
        category={dummyCategoryBadge}
        relatedArticles={relatedArticles}
      />
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      `関連記事: ${dummyCategoryBadge.name}`
    );
  });

  describe('relatedArticles が存在するとき', () => {
    it('記事タイトルリンクを表示する', () => {
      render(
        <RelativeArticleList
          category={dummyCategoryBadge}
          relatedArticles={relatedArticles}
        />
      );
      expect(screen.getByText('関連記事1')).toBeInTheDocument();
      expect(screen.getByText('関連記事2')).toBeInTheDocument();
    });

    it('リンクの href に article id が含まれる', () => {
      render(
        <RelativeArticleList
          category={dummyCategoryBadge}
          relatedArticles={relatedArticles.slice(0, 1)}
        />
      );
      expect(screen.getByRole('link')).toHaveAttribute(
        'href',
        '/article/article-1/'
      );
    });
  });

  describe('relatedArticles が空のとき', () => {
    it('「関連記事は、まだありません。」を表示する', () => {
      render(
        <RelativeArticleList category={dummyCategoryBadge} relatedArticles={[]} />
      );
      expect(screen.getByText('関連記事は、まだありません。')).toBeInTheDocument();
    });

    it('記事リンクを表示しない', () => {
      render(
        <RelativeArticleList category={dummyCategoryBadge} relatedArticles={[]} />
      );
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });
  });
});
