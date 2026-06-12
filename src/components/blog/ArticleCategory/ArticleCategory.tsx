import { ArticleBadge } from '@/components/blog/ArticleBadge/ArticleBadge';
import { styles } from './ArticleCategory.css';

type ArticleCategory = {
  category: CommonBadge;
};

const ArticleCategory = ({ category }: ArticleCategory) => {
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
