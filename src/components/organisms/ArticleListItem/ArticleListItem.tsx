import { BaseHeading } from '@/components/atoms/BaseHeading/BaseHeading';
import { BaseLink } from '@/components//atoms/BaseLink/BaseLink';
import { BaseText } from '@/components//atoms/BaseText/BaseText';
import { ArticleDate } from '@/components//molecules/ArticleDate/ArticleDate';
import { ArticleCategory } from '../ArticleCategory/ArticleCategory';
import { ArticleTag } from '../ArticleTag/ArticleTag';
import { styles } from './ArticleListItem.css';

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
          href={`/article/${article.id}/`}
          className={styles.baseLinkArticleListItem}
        >
          <BaseHeading hLv='2' className={styles.baseHeading2ArticleListItem}>
            {article.title}
          </BaseHeading>
        </BaseLink>
        <BaseText className={styles.baseTextArticleListItem}>
          {article.summary}
        </BaseText>
        <div className={styles.articleListItemBorder} />
        <ArticleTag tags={article.tags} />
      </article>
    </div>
  );
};

export { ArticleListItem };
