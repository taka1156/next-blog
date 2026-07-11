import { BaseLink } from '@/components/shared/BaseLink/BaseLink';
import { BaseImg } from '@/components/shared/BaseImg/BaseImg';
import { BaseText } from '@/components/shared/BaseText/BaseText';
import { resolveBlogImagePath } from '@/utils/imgix/r2';
import { styles } from './ArticleBadge.css';
import clsx from 'clsx';

type ArticleBadgeProps = {
  badgeType: 'category' | 'tag';
  badge: CommonBadge;
  className?: string;
};

const ArticleBadge = ({ badgeType, badge }: ArticleBadgeProps) => {
  const imageUrl = resolveBlogImagePath(badgeType, `${badge.name}.svg`);

  return (
    <div className={clsx(styles.common, styles[badgeType])}>
      <BaseText
        className={styles.articleBadgeText}
        color={badgeType === 'category' ? 'white' : 'theme'}
        size='extraSmall'
      >
        {badge.name}
      </BaseText>
      <BaseImg
        className={styles.articleBadgeImg}
        src={imageUrl}
        alt={`${badge.name}の画像`}
      />
    </div>
  );
};

export { ArticleBadge };
