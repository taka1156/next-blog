import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ArticleList } from './ArticleList';
import { dummyArticles } from '@/dummy';

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

vi.mock('@/components/shared/BaseImg/BaseImg', () => ({
  BaseImg: ({ alt }: { alt: string }) => <img alt={alt} />
}));

vi.mock('@/components/shared/BaseText/BaseText', () => ({
  BaseText: ({ children }: { children: React.ReactNode }) => <p>{children}</p>
}));

vi.mock('@/utils/dayjs', () => ({
  dayjs: Object.assign(
    (date?: string) => ({
      tz: () => ({
        format: () => (date ? '2023/6/15' : '--/--/--')
      })
    }),
    { extend: () => {} }
  )
}));

describe('ArticleList', () => {
  it('記事一覧を描画する', () => {
    render(<ArticleList summaries={dummyArticles.slice(0, 3)} />);
    expect(screen.getAllByRole('article')).toHaveLength(3);
  });

  it('各記事にタイトルリンクを表示する', () => {
    render(<ArticleList summaries={dummyArticles.slice(0, 1)} />);
    // タイトルリンク（/article/...）が存在することを確認
    const articleLink = screen
      .getAllByRole('link')
      .find((el) => el.getAttribute('href')?.startsWith('/article/'));
    expect(articleLink).toBeInTheDocument();
  });

  it('summaries が空のとき「記事がありません。」を表示する', () => {
    render(<ArticleList summaries={[]} />);
    expect(screen.getByText('記事がありません。')).toBeInTheDocument();
  });

  it('summaries が空のとき ul を描画しない', () => {
    render(<ArticleList summaries={[]} />);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('各記事の slug がリンクの href に使われる', () => {
    const article = dummyArticles[0];
    render(<ArticleList summaries={[article]} />);
    expect(
      screen
        .getAllByRole('link')
        .some((el) => el.getAttribute('href') === `/article/${article.slug}/`)
    ).toBe(true);
  });
});
