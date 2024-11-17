import { ReactNode, ElementType } from 'react';
import { styles } from './BaseHeading.css';
import clsx from 'clsx';

type BaseHeading = {
  id?: string;
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
