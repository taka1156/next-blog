import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { styles } from './ArticleBadge.css';
import clsx from 'clsx';

type ArticleBadge = {
  badgeType: 'category' | 'tag';
  routePath: string;
  badge: CommonBadge;
  className?: string;
};

const ArticleBadge = ({ badgeType, routePath, badge }: ArticleBadge) => {
  return (
    <BaseLink className={styles.container} href={`/${routePath}/${badge.id}/`}>
      <div className={clsx(styles.common, styles[badgeType])}>
        <BaseText className={styles.articleBadgeText}>{badge.name}</BaseText>
        <BaseImg
          className={styles.articleBadgeImg}
          src={badge.img.url}
          alt={`${badge.name}の画像`}
        />
      </div>
    </BaseLink>
  );
};

export { ArticleBadge };
