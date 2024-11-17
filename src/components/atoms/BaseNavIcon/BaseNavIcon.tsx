import { ReactNode } from 'react';
import { styles } from './BaseNavIcon.css';
import clsx from 'clsx';

type BaseNavIcon = {
  isOpen: boolean;
  clickEvent: () => void;
  children?: ReactNode;
  className?: string;
};

const BaseNavIcon = ({ isOpen, clickEvent, children, className }: BaseNavIcon) => {
  return (
    <div className={`${styles.baseNavIcon} ${className}`}>
      <button onClick={clickEvent} className={styles.buttonReset}>
        <span
          className={clsx(
            styles.navIconBorder,
            isOpen ? styles.baseNavIconTopOpen : styles.baseNavIconTopClose
          )}
        ></span>
        <span
          className={clsx(
            styles.navIconBorder,
            isOpen && styles.baseNavIconMiddleFade
          )}
        ></span>
        <span
          className={clsx(
            styles.navIconBorder,
            isOpen ? styles.baseNavIconBottomOpen : styles.baseNavIconBottomClose
          )}
        ></span>
        <span className={styles.baseNavIconText}>{children}</span>
      </button>
    </div>
  );
};

export { BaseNavIcon };
