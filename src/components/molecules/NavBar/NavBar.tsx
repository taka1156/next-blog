import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { BaseNavIcon } from '@/components/atoms/BaseNavIcon/BaseNavIcon';
import styles from './NavBar.module.css';

type NavBar = {
  logoText: string;
  isOpen: boolean;
  changeState: () => void;
};

const NavBar = ({ logoText, isOpen, changeState }: NavBar) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarBox}>
        <BaseLink routeTo="/" extendClass={styles.baseLinkNavbar}>
          {logoText}
        </BaseLink>
        <BaseNavIcon isOpen={isOpen} clickEvent={changeState}>
          {isOpen ? 'CLOSE' : 'NAVI'}
        </BaseNavIcon>
      </div>
    </div>
  );
};

export { NavBar };
