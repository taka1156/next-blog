'use client';
import Image from 'next/image';
import clsx from 'clsx';
import { microCMSLoader } from '@/utils/imgix';
import styles from './BaseImg.module.css';

type BaseImgProps = {
  src: string;
  alt: string;
  size: 'sm' | 'lg' | 'free';
  img?: {
    height: number;
    width: number;
  };
} & Omit<
  React.ComponentProps<'img'>,
  'height' | 'width' | 'loading' | 'ref' | 'alt' | 'src' | 'srcSet' | 'placeholder'
>;

const sizeList = {
  sm: {
    size: 20
  },
  lg: {
    size: 50
  }
};

const BaseImg = ({ size, ...props }: BaseImgProps) => {
  const { src, alt, className, ...otherProps } = props;

  const classes = clsx(styles.baseImg, styles[size], className);

  if (size !== 'free') {
    return (
      <Image
        {...otherProps}
        loader={microCMSLoader}
        src={src}
        alt={alt}
        height={sizeList[size].size}
        width={sizeList[size].size}
        className={classes}
      />
    );
  } else {
    return <img {...otherProps} src={src} alt={alt} className={classes} />;
  }
};

export { BaseImg };
