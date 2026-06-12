import { ReactNode, ElementType } from 'react';
import clsx from 'clsx';
import { styles } from './BaseHeading.css';

type BaseHeading = {
  /** anker */
  id?: string;
  /**
   * - 1 ~ 6 (h1~h6)
   */
  hLv: '1' | '2' | '3' | '4' | '5' | '6';
  children: ReactNode;
  className?: string;
};

const BaseHeading = ({ id, hLv, children, className }: BaseHeading) => {
  const Heading = `h${hLv}` as ElementType;

  return (
    <div>
      <Heading id={id} className={clsx(styles.heading, className)}>
        {children}
      </Heading>
    </div>
  );
};

export { BaseHeading };
