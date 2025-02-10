import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { styles } from './ArticleBadge.css';

type ArticleBadge = {
  routePath: string;
  badge: CommonBadge;
  className?: string;
};

const ArticleBadge = ({ routePath, badge, className }: ArticleBadge) => {
  return (
    <BaseLink href={`/${routePath}/${badge.id}/`}>
      <div className={`${styles.articleBadge} ${className}`}>
        <BaseText className={styles.articleBadgeText}>{badge.name}</BaseText>
        <BaseImg size='sm' src={badge.img.url} alt={`${badge.name}の画像`} />
      </div>
    </BaseLink>
  );
};

export { ArticleBadge };
