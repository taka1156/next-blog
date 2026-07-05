'use client';
import { BaseText } from '@/components/shared/BaseText/BaseText';
import { ArticlePagination } from '@/components/blog/ArticlePagination/ArticlePagination';
import { usePagination } from '@/hooks/usePagination';
import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { BaseLink } from '@/components/shared/BaseLink/BaseLink';
import { ArticleCategory } from '../ArticleCategory/ArticleCategory';
import { ArticleDate } from '../ArticleDate/ArticleDate';
import { styles } from './ArticleList.css';
import { ArticleTag } from '../ArticleTag/ArticleTag';

type ArticleListProps = {
  summaries: ArticleSummary[];
};

const ArticleList = ({ summaries = [] }: ArticleListProps) => {
  if (summaries.length !== 0) {
    return (
      <>
        <ul>
          {summaries.map((article: ArticleSummary) => (
            <li key={article.slug}>
              <article className={styles.articleListItem}>
                <ArticleCategory category={{ name: article.category }} />
                <ArticleDate
                  createdAt={article.created_at}
                  updatedAt={article.updated_at}
                />
                <div className={styles.articleListItemBorder} />
                <BaseLink
                  href={`/article/${article.slug}/`}
                  className={styles.articleListItemLink}
                >
                  <BaseHeading hLv='2' className={styles.articleListItemHeading}>
                    {article.title}
                  </BaseHeading>
                </BaseLink>
                <BaseText className={styles.articleListItemText}>
                  {article.summaryText}
                </BaseText>
                <div className={styles.articleListItemBorder} />
                <ArticleTag tags={article.tags.map((tag) => ({ name: tag }))} />
              </article>
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    return <BaseText>記事がありません。</BaseText>;
  }
};

export { ArticleList };
