import { ReactNode } from 'react';
import clsx from 'clsx';
import { styles } from './BaseText.css';

type BaseText = {
  children: ReactNode;
  className?: string;
};

const BaseText = ({ children, className }: BaseText) => {
  return <p className={clsx(styles.text, className)}>{children}</p>;
};

export { BaseText };
