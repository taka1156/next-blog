'use client';
import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { ArticlePagination } from '@/components/molecules/ArticlePagination/ArticlePagination';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { usePaginationHook } from '@/hooks/paginationHook';

type ArticleList = {
  articles: CommonArticles;
  routePath: string;
  maxPage: number;
};

const ArticleList = ({ articles, maxPage, routePath }: ArticleList) => {
  const { currentPage, prev, next } = usePaginationHook(maxPage);

  if (articles.length !== 0) {
    return (
      <>
        <ArticlePagination
          routePath={routePath}
          prevIndex={prev}
          nextIndex={next}
          currentPage={currentPage}
          maxPage={maxPage}
        />
        <ul>
          {articles.map((article: CommonArticle) => (
            <li key={article.id}>
              <ArticleListItem article={article} />
            </li>
          ))}
        </ul>
        <ArticlePagination
          routePath={routePath}
          prevIndex={prev}
          nextIndex={next}
          currentPage={currentPage}
          maxPage={maxPage}
        />
      </>
    );
  } else {
    return <BaseText>記事がありません。</BaseText>;
  }
};

export { ArticleList };
