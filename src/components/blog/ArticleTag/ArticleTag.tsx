import { ArticleBadge } from '@/components/blog/ArticleBadge/ArticleBadge';
import { styles } from './ArticleTag.css';
import { BaseLink } from '@/components/shared/BaseLink/BaseLink';

type ArticleTagProps = {
  tags: CommonBadges;
  enableLink?: boolean;
};

const ArticleTag = ({ tags, enableLink = true }: ArticleTagProps) => {
  return (
    <div className={styles.articleTag}>
      タグ:&nbsp;
      {tags.length !== 0 && (
        <>
          {tags.map((tag) => (
            <div key={tag.name}>
              {enableLink ? (
                <BaseLink className={styles.container} href={`/tag/${tag.name}/`}>
                  <ArticleBadge badgeType='tag' badge={tag} />
                </BaseLink>
              ) : (
                <span className={styles.container}>
                  <ArticleBadge badgeType='tag' badge={tag} />
                </span>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export { ArticleTag };
