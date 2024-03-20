'use client';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

const usePaginationHook = (maxPage: number) => {
  const { page } = useParams();
  let currentPage = 1;
  if (page) {
    const pageId = typeof page !== 'string' ? page[0] : page;
    currentPage = page ? parseInt(pageId) : 1;
  }

  const prev = useMemo(() => {
    /**
     * ひとつ前のページに戻る
     */
    if (currentPage === 1) {
      return maxPage;
    }
    return Math.max(currentPage - 1, 1);
  }, [currentPage, maxPage]);

  const next = useMemo(() => {
    /**
     * ひとつ後のページに進む
     */
    if (currentPage === maxPage) {
      return 1;
    }
    return Math.min(currentPage + 1, maxPage);
  }, [currentPage, maxPage]);

  return {
    currentPage,
    prev,
    next
  };
};

export { usePaginationHook };
