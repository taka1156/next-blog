import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './BaseLink.module.css';

type BaseLink = {
  routeTo: string;
  children?: ReactNode;
  extendClass?: string;
};

const BaseLink = ({ routeTo, children, extendClass = '' }: BaseLink) => {
  const isInternalLink = () => {
    /**
     * ルーティングか、外部リンクどちらか判定する。
     * Objectもしくは、httpを含まなければ、内部リンク
     */
    if (typeof routeTo === 'object') {
      return true;
    }
    return `${routeTo}`.indexOf('http') === -1;
  };

  if (isInternalLink()) {
    /* 内部リンク */
    return (
      <Link href={`${routeTo}`} className={`${styles.baseLink} ${extendClass}`}>
        {children}
      </Link>
    );
  } else {
    /* 外部リンク */
    return (
      <a
        href={routeTo as string}
        target='_blank'
        rel='noopener noreferrer'
        className={`${styles.baseLink} ${extendClass}`}
      >
        {children}
      </a>
    );
  }
};

export { BaseLink };
