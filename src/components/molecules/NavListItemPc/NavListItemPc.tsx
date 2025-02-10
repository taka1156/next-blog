import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { styles } from './NavListItemPc.css';

type NavListItemPc = {
  name: string;
  to: string;
  img: string;
};

const NavListItemPc = ({ name, to, img }: NavListItemPc) => {
  return (
    <BaseLink href={to} className={styles.baseLinkNavListItemPc}>
      <div className={styles.navListItemPcContents}>
        <BaseImg size='sm' src={img} alt={`${name}の画像`} />
        <BaseText className={styles.baseTextNavListItemPc}>{name}</BaseText>
      </div>
    </BaseLink>
  );
};

export { NavListItemPc };
