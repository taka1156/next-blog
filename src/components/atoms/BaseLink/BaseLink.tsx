import { ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { styles } from './BaseLink.css';

type BaseLink = {
  routeTo: string;
  children?: ReactNode;
  className?: string;
};

const BaseLink = ({ routeTo, children, className }: BaseLink) => {
  const classes = clsx(styles.link, className);

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
      <Link href={`${routeTo}`} className={classes}>
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
        className={classes}
      >
        {children}
      </a>
    );
  }
};

export { BaseLink };
