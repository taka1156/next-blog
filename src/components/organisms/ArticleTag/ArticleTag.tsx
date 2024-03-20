import { ArticleBadge } from '@/components/molecules/ArticleBadge/ArticleBadge';
import styles from './ArticleTag.module.css';

type ArticleTag = {
  tags: CommonBadges;
};

const ArticleTag = ({ tags }: ArticleTag) => {
  return (
    <div className={styles.articleTag}>
      タグ:&nbsp;
      {tags.length !== 0 && (
        <>
          {tags.map((tag) => (
            <div key={tag.id}>
              <ArticleBadge
                routePath='tag'
                badge={tag}
                extendClass={styles.articleBadgeTag}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export { ArticleTag };
