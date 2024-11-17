'use client';
import Image from 'next/image';
import { microCMSLoader } from '@/utils/imgix';
import { styles } from './BaseImg.css';

type BaseImg = {
  imgUrl: string;
  imgAlt: string;
  size: 'sm' | 'lg' | 'free';
  img?: {
    height: number;
    width: number;
  };
  className?: string;
};

const sizeList = {
  sm: {
    size: 20
  },
  lg: {
    size: 50
  }
};

const BaseImg = ({ imgUrl, imgAlt, size, className }: BaseImg) => {
  if (size !== 'free') {
    return (
      <Image
        loader={microCMSLoader}
        src={imgUrl}
        alt={imgAlt}
        height={sizeList[size].size}
        width={sizeList[size].size}
        className={`${styles.img} ${styles[size]} ${className}`}
      />
    );
  } else {
    return (
      <img
        src={imgUrl}
        alt={imgAlt}
        className={`${styles.img} ${styles[size]} ${className}`}
      />
    );
  }
};

export { BaseImg };
