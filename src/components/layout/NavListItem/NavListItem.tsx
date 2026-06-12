import { BaseImg } from '@/components/shared/BaseImg/BaseImg';
import { BaseText } from '@/components/shared/BaseText/BaseText';
import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { styles } from './NavListItem.css';

type NavListItem = RouteItem;

const NavListItem = ({ href, name, img }: NavListItem) => {
  return (
    <BaseLink href={href} className={styles.baseLinkNavListItem}>
      <BaseImg className={styles.navItemImg} src={img} alt={`${name}の画像`} />
      <BaseText className={styles.baseTextNavListItem}>{name}</BaseText>
    </BaseLink>
  );
};

export { NavListItem };
