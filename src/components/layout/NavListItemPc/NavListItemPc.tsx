import { BaseImg } from '@/components/shared/BaseImg/BaseImg';
import { BaseText } from '@/components/shared/BaseText/BaseText';
import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { styles } from './NavListItemPc.css';

type NavListItemPc = {
  name: string;
  href: string;
  img: string;
};

const NavListItemPc = ({ name, href, img }: NavListItemPc) => {
  return (
    <BaseLink href={href} className={styles.baseLinkNavListItemPc}>
      <BaseImg className={styles.navListItemPcImg} src={img} alt={`${name}の画像`} />
      <BaseText className={styles.baseTextNavListItemPc}>{name}</BaseText>
    </BaseLink>
  );
};

export { NavListItemPc };
