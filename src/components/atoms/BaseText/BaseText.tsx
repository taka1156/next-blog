import { ReactNode } from 'react';
import { styles } from './BaseText.css';
import clsx from 'clsx';

type BaseText = {
  children: ReactNode;
  className?: string;
};

const BaseText = ({ children, className }: BaseText) => {
  return <p className={clsx(styles.baseText, className)}>{children}</p>;
};

export { BaseText };
