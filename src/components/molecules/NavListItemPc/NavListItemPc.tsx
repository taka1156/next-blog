import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import styles from './NavListItemPc.module.css';

type NavListItemPc = {
  name: string;
  to: string;
  img: string;
};

const NavListItemPc = ({ name, to, img }: NavListItemPc) => {
  return (
    <BaseLink routeTo={to} extendClass={styles.baseLinkNavListItemPc}>
      <div className={styles.navListItemPcContents}>
        <BaseImg size='sm' imgUrl={img} imgAlt={`${name}の画像`} />
        <BaseText extendClass={styles.baseTextNavListItemPc}>{name}</BaseText>
      </div>
    </BaseLink>
  );
};

export { NavListItemPc };
