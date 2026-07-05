import { ArticleBadge } from '@/components/blog/ArticleBadge/ArticleBadge';
import { styles } from './ArticleTag.css';

type ArticleTagProps = {
  tags: CommonBadges;
};

const ArticleTag = ({ tags }: ArticleTagProps) => {
  return (
    <div className={styles.articleTag}>
      タグ:&nbsp;
      {tags.length !== 0 && (
        <>
          {tags.map((tag) => (
            <div key={tag.name}>
              <ArticleBadge badgeType='tag' routePath='tag' badge={tag} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export { ArticleTag };
