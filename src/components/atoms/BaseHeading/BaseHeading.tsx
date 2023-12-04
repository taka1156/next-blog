import { ReactNode, ElementType } from 'react';
import styles from './BaseHeading.module.css';

type BaseHeading = {
  id?: string;
  hLv: '1' | '2' | '3' | '4' | '5' | '6';
  children: ReactNode;
  extendClass?: string;
};

const BaseHeading = ({ id, hLv, children, extendClass = '' }: BaseHeading) => {
  const Heading = `h${hLv}` as ElementType;

  return (
    <div>
      <Heading id={id} className={`${styles.baseHeading} ${extendClass}`}>
        {children}
      </Heading>
    </div>
  );
};

export { BaseHeading };
