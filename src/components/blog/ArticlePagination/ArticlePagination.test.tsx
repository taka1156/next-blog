import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { setup } from '@/utils/testtool/';
import { ArticlePagination } from './ArticlePagination';
import { dummyPagination } from '@/dummy';

describe('ArticlePagination', () => {
  it('ArticlePagination初期値: currentPage, maxPage', () => {
    const { renderResult } = setup(<ArticlePagination {...dummyPagination} />);

    const targetPaginationPrevLink = screen.getByTestId<HTMLAnchorElement>(
      'targetPaginationPrevLink'
    );
    const targetPaginationNextText = screen.getByTestId<HTMLAnchorElement>(
      'targetPaginationCurrentText'
    );
    const targetPaginationNextLink = screen.getByTestId<HTMLAnchorElement>(
      'targetPaginationNextLink'
    );

    const { currentPage, maxPage, routePath, prevIndex, nextIndex } =
      dummyPagination;

    expect(targetPaginationPrevLink.pathname).toBe(`/${routePath}/${prevIndex}`);
    expect(targetPaginationNextText.textContent).toBe(`${currentPage}/${maxPage}`);
    expect(targetPaginationNextLink.pathname).toBe(`/${routePath}/${nextIndex}`);

    expect(renderResult).toMatchSnapshot();
  });
});
