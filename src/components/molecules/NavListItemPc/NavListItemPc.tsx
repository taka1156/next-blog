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
    <div className={styles.navItem}>
      <BaseLink routeTo={to}>
        <div className="nav-item__contents">
          <BaseImg size="sm" imgUrl={img} imgAlt={`${name}の画像`} />
          <BaseText extendClass={styles.baseTextNavlistitempc}>{name}</BaseText>
        </div>
      </BaseLink>
    </div>
  );
};

export { NavListItemPc };
