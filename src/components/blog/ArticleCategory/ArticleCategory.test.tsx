import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ArticleCategory } from './ArticleCategory';
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
    <a href={href} data-nextlink='true' {...props}>
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

describe('ArticleCategory', () => {
  it('「カテゴリー:」ラベルを表示する', () => {
    // バッジ名と重複しないように enableLink=false で最小レンダリング
    const { container } = render(
      <ArticleCategory category={dummyCategoryBadge} enableLink={false} />
    );
    expect(container).toHaveTextContent('カテゴリー:');
  });

  describe('enableLink=true（デフォルト）', () => {
    it('カテゴリーへのリンクを描画する', () => {
      render(<ArticleCategory category={dummyCategoryBadge} />);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', `/category/${dummyCategoryBadge.name}/`);
    });
  });

  describe('enableLink=false', () => {
    it('リンクを描画しない', () => {
      render(<ArticleCategory category={dummyCategoryBadge} enableLink={false} />);
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });

    it('<span> でバッジをラップする', () => {
      const { container } = render(
        <ArticleCategory category={dummyCategoryBadge} enableLink={false} />
      );
      expect(container.querySelector('span')).toBeInTheDocument();
    });
  });
});
