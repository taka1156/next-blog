import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ArticleTag } from './ArticleTag';
import { dummyTagBadges } from '@/dummy';

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

describe('ArticleTag', () => {
  it('「タグ:」ラベルを表示する', () => {
    // tags=[] でバッジ名が混在しない状態で「タグ:」テキストを確認する
    const { container } = render(<ArticleTag tags={[]} />);
    expect(container).toHaveTextContent('タグ:');
  });

  describe('enableLink=true（デフォルト）', () => {
    it('タグ数分のリンクを描画する', () => {
      render(<ArticleTag tags={dummyTagBadges} />);
      const links = screen.getAllByRole('link');
      expect(links).toHaveLength(dummyTagBadges.length);
    });

    it('リンクの href がタグ名を含む', () => {
      render(<ArticleTag tags={dummyTagBadges.slice(0, 1)} />);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', `/tag/${dummyTagBadges[0].name}/`);
    });
  });

  describe('enableLink=false', () => {
    it('リンクを描画しない', () => {
      render(<ArticleTag tags={dummyTagBadges} enableLink={false} />);
      expect(screen.queryAllByRole('link')).toHaveLength(0);
    });

    it('<span> でタグをラップする', () => {
      const { container } = render(
        <ArticleTag tags={dummyTagBadges} enableLink={false} />
      );
      expect(container.querySelectorAll('span')).toHaveLength(dummyTagBadges.length);
    });
  });

  it('tags が空のとき何も表示しない（タグ要素なし）', () => {
    render(<ArticleTag tags={[]} />);
    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });
});
