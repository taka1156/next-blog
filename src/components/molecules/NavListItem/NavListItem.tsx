import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import styles from "./NavListItem.module.css";

type NavListItem = RouteItem;

const NavListItem = ({ to, name, img }: NavListItem) => {
  return (
    <div>
      <div className={styles.navItem}>
        <BaseLink routeTo={to} extendClass={styles.baseLinkNavListItem}>
          <BaseImg size="lg" imgUrl={img} imgAlt={`${name}の画像`} />
          <BaseText extendClass={styles.baseTextNavListItem}>{name}</BaseText>
        </BaseLink>
      </div>
    </div>
  );
};

export { NavListItem };
