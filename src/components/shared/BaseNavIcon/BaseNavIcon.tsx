import { ReactNode } from 'react';
import clsx from 'clsx';
import { styles } from './BaseNavIcon.css';

type BaseNavIconProps = {
  isOpen: boolean;
  children?: ReactNode;
  className?: string;
  onClick: () => void;
};

const BaseNavIcon = ({ isOpen, children, onClick }: BaseNavIconProps) => {
  return (
    <div className={styles.navIcon}>
      <button
        onClick={onClick}
        className={styles.buttonReset}
        data-testid='targetNavButton'
      >
        <span
          className={clsx(
            styles.navIconBorder,
            isOpen ? styles.navIconTopOpen : styles.navIconTopClose
          )}
          data-testid='targetNavTop'
        ></span>
        <span
          className={clsx(styles.navIconBorder, isOpen && styles.navIconMiddleFade)}
          data-testid='targetNavMiddle'
        ></span>
        <span
          className={clsx(
            styles.navIconBorder,
            isOpen ? styles.navIconBottomOpen : styles.navIconBottomClose
          )}
          data-testid='targetNavBottom'
        ></span>
        <span className={styles.navIconText} data-testid='targetNavText'>
          {children}
        </span>
      </button>
    </div>
  );
};

export { BaseNavIcon };
