import Link from 'next/link';
import clsx from 'clsx';
import styles from './BaseLink.module.css';

type BaseLinkProps = { href: string } & Omit<React.ComponentProps<'a'>, 'ref'>;

const BaseLink = ({ ...props }: BaseLinkProps) => {
  const { href, className, children, ...otherProps } = props;

  const classes = clsx(styles.baseLink, className);

  const isInternalLink = () => {
    /**
     * ルーティングか、外部リンクどちらか判定する。
     * httpを含まなければ、内部リンク
     */
    return href.indexOf('http') === -1;
  };

  if (isInternalLink()) {
    /* 内部リンク */
    return (
      <Link {...otherProps} href={href} className={classes}>
        {children}
      </Link>
    );
  } else {
    /* 外部リンク */
    return (
      <a
        {...otherProps}
        href={href}
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
