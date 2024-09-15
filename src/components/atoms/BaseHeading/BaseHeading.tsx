import styles from './BaseHeading.module.css';
import clsx from 'clsx';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type CommonHeadingProps = {
  /**
   * 見出しタグのレベルしてい(h1~h6)
   */
  hLv: HeadingLevel;
};

type BaseHeadingProps = CommonHeadingProps & React.ComponentProps<HeadingLevel>;

const BaseHeading = ({ ...props }: BaseHeadingProps) => {
  const { hLv, className, children, ...otherProps } = props;

  const HeadingLevel = hLv;

  const classes = clsx(styles.baseHeading, className);

  return (
    <div>
      <HeadingLevel {...otherProps} className={classes}>
        {children}
      </HeadingLevel>
    </div>
  );
};

export { BaseHeading };
