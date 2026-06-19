import { BaseLink } from '@/components/shared/BaseLink/BaseLink';
import { BaseImg } from '@/components/shared/BaseImg/BaseImg';
import { BaseText } from '@/components/shared/BaseText/BaseText';
import { styles } from './ArticleBadge.css';
import clsx from 'clsx';

type ArticleBadgeProps = {
  badgeType: 'category' | 'tag';
  routePath: string;
  badge: CommonBadge;
  className?: string;
};

const ArticleBadge = ({ badgeType, routePath, badge }: ArticleBadgeProps) => {
  return (
    <BaseLink className={styles.container} href={`/${routePath}/${badge.id}/`}>
      <div className={clsx(styles.common, styles[badgeType])}>
        <BaseText
          className={styles.articleBadgeText}
          color={badgeType === 'category' ? 'white' : 'theme'}
        >
          {badge.name}
        </BaseText>
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
