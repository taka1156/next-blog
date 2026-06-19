import { ArticleBadge } from '@/components/blog/ArticleBadge/ArticleBadge';
import { styles } from './ArticleCategory.css';

type ArticleCategoryProps = {
  category: CommonBadge;
};

const ArticleCategory = ({ category }: ArticleCategoryProps) => {
  return (
    <div>
      <div className={styles.articleCategory}>
        カテゴリー:
        <ArticleBadge badgeType='category' routePath='category' badge={category} />
      </div>
    </div>
  );
};

export { ArticleCategory };
