import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import clsx from 'clsx';
import styles from './ArticleBadge.module.css';

type ArticleBadge = {
  routePath: string;
  badge: CommonBadge;
  className?: string;
};

const ArticleBadge = ({ routePath, badge, className }: ArticleBadge) => {
  const badgeContainerClasses = clsx(styles.articleBadge, className);

  return (
    <BaseLink data-testid='targetBadgeLink' href={`/${routePath}/${badge.id}/`}>
      <div className={badgeContainerClasses}>
        <span data-testid='targetBadgeText' className={styles.articleBadgeText}>
          {badge.name}
        </span>
        <BaseImg size='sm' src={badge.img.url} alt={`${badge.name}の画像`} />
      </div>
    </BaseLink>
  );
};

export { ArticleBadge };
