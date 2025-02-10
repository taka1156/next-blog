import { ArticleBadge } from '@/components/molecules/ArticleBadge/ArticleBadge';
import { styles } from './ArticleCategory.css';

type ArticleCategory = {
  category: CommonBadge;
};

const ArticleCategory = ({ category }: ArticleCategory) => {
  return (
    <div>
      <div className={styles.articleCategory}>
        カテゴリー:
        <ArticleBadge
          routePath='category'
          badge={category}
          className={styles.articleBadgeCategory}
        />
      </div>
    </div>
  );
};

export { ArticleCategory };
