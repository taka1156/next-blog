import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ArticlePagination } from './ArticlePagination';
import { dummyPagination } from '@/dummy';

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
  BaseText: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => <p {...props}>{children}</p>
}));

describe('ArticlePagination', () => {
  const { routePath, prevIndex, nextIndex, currentPage, maxPage } = dummyPagination;

  it('現在ページ / 最大ページ を表示する', () => {
    render(
      <ArticlePagination
        routePath={routePath}
        prevIndex={prevIndex}
        nextIndex={nextIndex}
        currentPage={currentPage}
        maxPage={maxPage}
      />
    );
    expect(screen.getByTestId('targetPaginationCurrentText')).toHaveTextContent(
      `${currentPage}/${maxPage}`
    );
  });

  it('前ページへのリンクを表示する', () => {
    render(
      <ArticlePagination
        routePath={routePath}
        prevIndex={prevIndex}
        nextIndex={nextIndex}
        currentPage={currentPage}
        maxPage={maxPage}
      />
    );
    const prevLink = screen.getByTestId('targetPaginationPrevLink');
    expect(prevLink).toHaveAttribute('href', `/${routePath}/${prevIndex}/`);
  });

  it('次ページへのリンクを表示する', () => {
    render(
      <ArticlePagination
        routePath={routePath}
        prevIndex={prevIndex}
        nextIndex={nextIndex}
        currentPage={currentPage}
        maxPage={maxPage}
      />
    );
    const nextLink = screen.getByTestId('targetPaginationNextLink');
    expect(nextLink).toHaveAttribute('href', `/${routePath}/${nextIndex}/`);
  });
});
