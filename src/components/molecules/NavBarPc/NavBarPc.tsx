import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { NavListPc } from '@/components/molecules/NavListPc/NavListPc';
import styles from './NavBarPc.module.css';

type NavBarPc = {
  logoText: string;
  routes: RouteItems;
};

const NavBarPc = ({ logoText, routes }: NavBarPc) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarBox}>
        <BaseLink routeTo="/" extendClass={styles.baseLinkNavBarPc}>
          {logoText}
        </BaseLink>
        <NavListPc routes={routes} />
      </div>
    </div>
  );
};

export { NavBarPc };
