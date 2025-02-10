import { ReactNode } from 'react';
import clsx from 'clsx';
import { styles } from './BaseNavIcon.css';

type BaseNavIconProps = {
  isOpen: boolean;
  children?: ReactNode;
  className?: string;
  onClick: () => void;
};

const BaseNavIcon = ({ isOpen, children, className, onClick }: BaseNavIconProps) => {
  return (
    <div className={`${styles.navIcon} ${className}`}>
      <button onClick={onClick} className={styles.buttonReset}>
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
