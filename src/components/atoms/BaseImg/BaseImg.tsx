'use client';
import Image from 'next/image';
import { microCMSLoader } from '@/utils/imgix';
import styles from './BaseImg.module.css';

type BaseImg = {
  imgUrl: string;
  imgAlt: string;
  size: 'sm' | 'lg' | 'free';
  img?: {
    height: number;
    width: number;
  };
  extendClass?: string;
};

const sizeList = {
  sm: {
    size: 20
  },
  lg: {
    size: 50
  }
};

const BaseImg = ({ imgUrl, imgAlt, size, extendClass = '' }: BaseImg) => {
  if (size !== 'free') {
    return (
      <Image
        loader={microCMSLoader}
        src={imgUrl}
        alt={imgAlt}
        height={sizeList[size].size}
        width={sizeList[size].size}
        className={`${styles.baseImg} ${styles[size]} ${extendClass}`}
      />
    );
  } else {
    return (
      <img
        src={imgUrl}
        alt={imgAlt}
        className={`${styles.baseImg} ${styles[size]} ${extendClass}`}
      />
    );
  }
};

export { BaseImg };
