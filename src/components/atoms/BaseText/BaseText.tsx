import { ReactNode } from 'react';
import styles from './BaseText.module.css';

type BaseText = {
  children: ReactNode;
  extendClass?: string;
};

const BaseText = ({ children, extendClass = "" }: BaseText) => {
  return <p className={`${styles.baseText} ${extendClass}`}>{children}</p>;
};

export { BaseText };
