import { ArticleBadge } from '@/components/molecules/ArticleBadge/ArticleBadge';
import styles from './ArticleCategory.module.css';

type ArticleCategory = {
  category: CommonBadge;
};

const ArticleCategory = ({ category }: ArticleCategory) => {
  return (
    <div>
      <div className={styles.articleCategory}>
        カテゴリー:
        <ArticleBadge
          routePath="category"
          badge={category}
          extendClass={styles.articleBadgeCategory}
        />
      </div>
    </div>
  );
};

export { ArticleCategory };
