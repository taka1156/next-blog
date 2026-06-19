'use client';
import { BaseText } from '@/components/shared/BaseText/BaseText';
import { ArticlePagination } from '@/components/blog/ArticlePagination/ArticlePagination';
import { usePaginationHook } from '@/hooks/paginationHook';
import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { BaseLink } from '@/components/shared/BaseLink/BaseLink';
import { ArticleCategory } from '../ArticleCategory/ArticleCategory';
import { ArticleDate } from '../ArticleDate/ArticleDate';
import { styles } from './ArticleList.css';
import { ArticleTag } from '../ArticleTag/ArticleTag';

type ArticleListProps = {
  articles: CommonArticles;
  routePath: string;
  maxPage: number;
};

const ArticleList = ({ articles, maxPage, routePath }: ArticleListProps) => {
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
              <article className={styles.articleListItem}>
                <ArticleCategory category={article.category} />
                <ArticleDate
                  createdAt={article.createdAt}
                  updatedAt={article.updatedAt}
                />
                <div className={styles.articleListItemBorder} />
                <BaseLink
                  href={`/article/${article.id}/`}
                  className={styles.articleListItemLink}
                >
                  <BaseHeading hLv='2' className={styles.articleListItemHeading}>
                    {article.title}
                  </BaseHeading>
                </BaseLink>
                <BaseText className={styles.articleListItemText}>
                  {article.summary}
                </BaseText>
                <div className={styles.articleListItemBorder} />
                <ArticleTag tags={article.tags} />
              </article>
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
