import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import styles from './ArticleBadge.module.css';

type ArticleBadge = {
  routePath: string;
  badge: CommonBadge;
  className?: string;
};

const ArticleBadge = ({ routePath, badge, className = '' }: ArticleBadge) => {
  return (
    <BaseLink href={`/${routePath}/${badge.id}/`}>
      <div className={`${styles.articleBadge} ${className}`}>
        <span className={styles.articleBadgeText}>{badge.name}</span>
        <BaseImg size='sm' src={badge.img.url} alt={`${badge.name}の画像`} />
      </div>
    </BaseLink>
  );
};

export { ArticleBadge };
