import { BaseHeading } from '@/components/atoms/BaseHeading/BaseHeading';
import { BaseLink } from '@/components//atoms/BaseLink/BaseLink';
import { BaseText } from '@/components//atoms/BaseText/BaseText';
import { ArticleDate } from '@/components//molecules/ArticleDate/ArticleDate';
import { ArticleCategory } from '../ArticleCategory/ArticleCategory';
import { ArticleTag } from '../ArticleTag/ArticleTag';
import styles from './ArticleListItem.module.css';

type ArticleListItem = {
  article: {
    id: string;
    title: string;
    summary: string;
    category: CommonBadge;
    tags: CommonBadges;
    createdAt: string;
    updatedAt: string;
  };
};

const ArticleListItem = ({ article }: ArticleListItem) => {
  return (
    <div>
      <article className={styles.articleListItem}>
        <ArticleCategory category={article.category} />
        <ArticleDate createdAt={article.createdAt} updatedAt={article.updatedAt} />
        <div className={styles.articleListItemBorder} />
        <BaseLink
          routeTo={`/article/${article.id}/`}
          extendClass={styles.baseLinkArticlelistitem}
        >
          <BaseHeading hLv='2' extendClass={styles.baseHeading2Articlelistitem}>
            {article.title}
          </BaseHeading>
        </BaseLink>
        <BaseText extendClass={styles.baseTextArticlelistitem}>
          {article.summary}
        </BaseText>
        <div className={styles.articleListItemBorder} />
        <ArticleTag tags={article.tags} />
      </article>
    </div>
  );
};

export { ArticleListItem };
