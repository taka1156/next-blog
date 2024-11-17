import { ReactNode } from 'react';
import clsx from 'clsx';
import { styles } from './BaseNavIcon.css';

type BaseNavIcon = {
  isOpen: boolean;
  clickEvent: () => void;
  children?: ReactNode;
  className?: string;
};

const BaseNavIcon = ({ isOpen, clickEvent, children, className }: BaseNavIcon) => {
  return (
    <div className={`${styles.navIcon} ${className}`}>
      <button onClick={clickEvent} className={styles.buttonReset}>
        <span
          className={clsx(
            styles.navIconBorder,
            isOpen ? styles.navIconTopOpen : styles.navIconTopClose
          )}
        ></span>
        <span
          className={clsx(styles.navIconBorder, isOpen && styles.navIconMiddleFade)}
        ></span>
        <span
          className={clsx(
            styles.navIconBorder,
            isOpen ? styles.navIconBottomOpen : styles.navIconBottomClose
          )}
        ></span>
        <span className={styles.navIconText}>{children}</span>
      </button>
    </div>
  );
};

export { BaseNavIcon };
