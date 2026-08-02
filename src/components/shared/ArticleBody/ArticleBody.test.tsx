import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ArticleBody } from './ArticleBody';

vi.mock('@/hooks/useMarked', () => ({
  useMarked: vi.fn()
}));

vi.mock('@/components/shared/IndexNavigation/IndexNavigation', () => ({
  IndexNavigation: () => <div data-testid='index-navigation' />
}));

vi.mock('@/components/shared/BaseLoading/BaseLoading', () => ({
  BaseLoading: () => <div data-testid='base-loading' />
}));

describe('ArticleBody', () => {
  it('parseCompleted が false のとき BaseLoading を表示する', async () => {
    const { useMarked } = await import('@/hooks/useMarked');
    vi.mocked(useMarked).mockReturnValue({
      parseCompleted: false,
      articleBodyText: '',
      articleBodyTocs: []
    });

    render(<ArticleBody body='# test' />);
    expect(screen.getByTestId('base-loading')).toBeInTheDocument();
  });

  it('parseCompleted が true のとき本文を表示する', async () => {
    const { useMarked } = await import('@/hooks/useMarked');
    vi.mocked(useMarked).mockReturnValue({
      parseCompleted: true,
      articleBodyText: '<p>本文</p>',
      articleBodyTocs: []
    });

    render(<ArticleBody body='本文' />);
    expect(screen.queryByTestId('base-loading')).not.toBeInTheDocument();
    expect(screen.getByTestId('index-navigation')).toBeInTheDocument();
  });

  it('parseCompleted が true のとき dangerouslySetInnerHTML で HTML を描画する', async () => {
    const { useMarked } = await import('@/hooks/useMarked');
    vi.mocked(useMarked).mockReturnValue({
      parseCompleted: true,
      articleBodyText: '<h2>タイトル</h2>',
      articleBodyTocs: []
    });

    const { container } = render(<ArticleBody body='## タイトル' />);
    expect(container.querySelector('h2')).toBeInTheDocument();
  });

  it('containerId を渡すと anchorPrefix として useMarked に渡される', async () => {
    const { useMarked } = await import('@/hooks/useMarked');
    vi.mocked(useMarked).mockReturnValue({
      parseCompleted: false,
      articleBodyText: '',
      articleBodyTocs: []
    });

    render(<ArticleBody body='# test' containerId='article-1' />);
    expect(useMarked).toHaveBeenCalledWith('# test', 'article-1-');
  });
});
