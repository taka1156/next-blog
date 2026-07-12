import { ArticleBadge } from '@/components/blog/ArticleBadge/ArticleBadge';
import { styles } from './ArticleCategory.css';
import { BaseLink } from '@/components/shared/BaseLink/BaseLink';

type ArticleCategoryProps = {
  category: CommonBadge;
  enableLink?: boolean;
};

const ArticleCategory = ({ category, enableLink = true }: ArticleCategoryProps) => {
  return (
    <div>
      <div className={styles.articleCategory}>
        カテゴリー:
        {enableLink ? (
          <BaseLink
            className={styles.container}
            href={`/category/${category.name}/`}
          >
            <ArticleBadge badgeType='category' badge={category} />
          </BaseLink>
        ) : (
          <span className={styles.container}>
            <ArticleBadge badgeType='category' badge={category} />
          </span>
        )}
      </div>
    </div>
  );
};

export { ArticleCategory };
