import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ArticleBadge } from './ArticleBadge';
import { dummyCategoryBadge, dummyTagBadge } from '@/dummy';

vi.mock('@/components/shared/BaseImg/BaseImg', () => ({
  BaseImg: ({ alt }: { alt: string }) => <img alt={alt} />
}));

vi.mock('@/components/shared/BaseText/BaseText', () => ({
  BaseText: ({
    children,
    color
  }: {
    children: React.ReactNode;
    color?: string;
    size?: string;
    className?: string;
  }) => <p data-color={color}>{children}</p>
}));

describe('ArticleBadge', () => {
  it('バッジ名を表示する', () => {
    render(<ArticleBadge badgeType='category' badge={dummyCategoryBadge} />);
    expect(screen.getByText(dummyCategoryBadge.name)).toBeInTheDocument();
  });

  it('バッジ画像の alt テキストにバッジ名を含む', () => {
    render(<ArticleBadge badgeType='category' badge={dummyCategoryBadge} />);
    expect(
      screen.getByAltText(`${dummyCategoryBadge.name}の画像`)
    ).toBeInTheDocument();
  });

  describe('category タイプ', () => {
    it('white カラーのテキストを表示する', () => {
      render(<ArticleBadge badgeType='category' badge={dummyCategoryBadge} />);
      expect(screen.getByText(dummyCategoryBadge.name)).toHaveAttribute(
        'data-color',
        'white'
      );
    });
  });

  describe('tag タイプ', () => {
    it('theme カラーのテキストを表示する', () => {
      render(<ArticleBadge badgeType='tag' badge={dummyTagBadge} />);
      expect(screen.getByText(dummyTagBadge.name)).toHaveAttribute(
        'data-color',
        'theme'
      );
    });
  });
});
