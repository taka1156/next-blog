import clsx from 'clsx';
import styles from './BaseText.module.css';

type BaseTextProps = React.ComponentProps<'p'>;

const BaseText = ({ ...props }: BaseTextProps) => {
  const { children, className, ...otherProps } = props;

  const classes = clsx(styles.baseText, className);

  return (
    <p {...otherProps} className={classes}>
      {children}
    </p>
  );
};

export { BaseText };
