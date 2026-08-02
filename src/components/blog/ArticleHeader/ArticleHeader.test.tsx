import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ArticleHeader } from './ArticleHeader';
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

describe('ArticleHeader', () => {
  const summary = dummyArticles[0];

  it('記事タイトルを h1 で表示する', () => {
    render(<ArticleHeader summary={summary} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      summary.title
    );
  });

  it('カテゴリーラベルを表示する', () => {
    render(<ArticleHeader summary={summary} />);
    expect(screen.getByText(/カテゴリー/)).toBeInTheDocument();
  });

  it('タグラベルを表示する', () => {
    render(<ArticleHeader summary={summary} />);
    // ArticleTag の div に「タグ:」が含まれることを確認
    const { container } = render(<ArticleHeader summary={summary} />);
    expect(container).toHaveTextContent('タグ:');
  });

  it('作成日・更新日を表示する', () => {
    render(<ArticleHeader summary={summary} />);
    expect(screen.getByText(/作成日/)).toBeInTheDocument();
  });
});
