import { ArticleBadge } from '@/components/molecules/ArticleBadge/ArticleBadge';
import { styles } from './ArticleTag.css';

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
              <ArticleBadge badgeType='tag' routePath='tag' badge={tag} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export { ArticleTag };
