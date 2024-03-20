import { ReactNode } from 'react';
import styles from './BaseNavIcon.module.css';

type BaseNavIcon = {
  isOpen: boolean;
  clickEvent: () => void;
  children?: ReactNode;
  extendClass?: string;
};

const BaseNavIcon = ({
  isOpen,
  clickEvent,
  children,
  extendClass = ''
}: BaseNavIcon) => {
  return (
    <div className={`${styles.baseNavIcon} ${extendClass}`}>
      <button onClick={clickEvent} className={styles.buttonReset}>
        <span
          className={`${styles.baseNavIconBorder} ${isOpen ? styles.baseNavIconTopOpen : styles.baseNavIconTopClose}`}
        ></span>
        <span
          className={`${styles.baseNavIconBorder} ${isOpen ? styles.baseNavIconMiddleFade : ''}`}
        ></span>
        <span
          className={`${styles.baseNavIconBorder} ${
            isOpen ? styles.baseNavIconBottomOpen : styles.baseNavIconBottomClose
          }`}
        ></span>
        <span className={styles.baseNavIconText}>{children}</span>
      </button>
    </div>
  );
};

export { BaseNavIcon };
