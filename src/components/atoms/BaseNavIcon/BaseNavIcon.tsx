import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './BaseNavIcon.module.css';

type BaseNavIconProps = {
  isOpen: boolean;
  onClick: () => void;
  children?: ReactNode;
  className?: string;
};

const BaseNavIcon = ({ isOpen, onClick, children, className }: BaseNavIconProps) => {
  const classes = clsx(styles.baseNavIcon, className);

  const topClasses = clsx(
    styles.baseNavIconBorder,
    isOpen ? styles.baseNavIconTopOpen : styles.baseNavIconTopClose
  );
  const middleClasses = clsx(
    styles.baseNavIconBorder,
    isOpen && styles.baseNavIconMiddleFade
  );
  const bottomClasses = clsx(
    styles.baseNavIconBorder,
    isOpen ? styles.baseNavIconBottomOpen : styles.baseNavIconBottomClose
  );

  return (
    <div className={classes}>
      <button
        type='button'
        data-testid='targetNavButton'
        onClick={onClick}
        className={styles.buttonReset}
      >
        <span data-testid='targetNavTop' className={topClasses}></span>
        <span data-testid='targetNavMiddle' className={middleClasses}></span>
        <span data-testid='targetNavBottom' className={bottomClasses}></span>
        <span data-testid='targetNavText' className={styles.baseNavIconText}>
          {children}
        </span>
      </button>
    </div>
  );
};

export { BaseNavIcon };
