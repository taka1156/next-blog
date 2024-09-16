import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import styles from './NavListItem.module.css';

type NavListItem = RouteItem;

const NavListItem = ({ to, name, img }: NavListItem) => {
  return (
    <div>
      <div className={styles.navItem}>
        <BaseLink href={to} className={styles.baseLinkNavListItem}>
          <BaseImg size='lg' src={img} alt={`${name}の画像`} />
          <BaseText className={styles.baseTextNavListItem}>{name}</BaseText>
        </BaseLink>
      </div>
    </div>
  );
};

export { NavListItem };
