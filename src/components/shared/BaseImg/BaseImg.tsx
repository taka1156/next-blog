'use client';
import Image, { ImageProps } from 'next/image';
import { microCMSLoader } from '@/utils/imgix';
import React from 'react';
import clsx from 'clsx';
import { styles } from './BaseImg.css';

type BaseCommonImgProps = {
  src: string;
  alt: string;
  className?: string;
};

type DefaultImgProps = BaseCommonImgProps & BaseCommonImgProps;
type NextImgProps = BaseCommonImgProps & ImageProps;

const DefaultImg = ({ src, alt, ...props }: DefaultImgProps) => {
  return <img {...props} src={src} alt={alt} />;
};

const NextImg = ({ src, alt, ...props }: NextImgProps) => {
  return <Image {...props} loader={microCMSLoader} src={src} alt={alt} />;
};

/**
 * 画像を表示するコンポーネント
 * Next.jsのImageコンポーネントを使用しているため、レスポンシブ対応や最適化が可能
 *
 * srcにURLを渡すとNext.jsのImageコンポーネントが使用され、ローカルの画像パスを渡すと通常のimgタグが使用される
 *
 * classNameを渡すことで、スタイルの上書きが可能
 */
const BaseImg = ({ className, ...props }: DefaultImgProps | NextImgProps) => {
  if ('fill' in props || 'height' in props || 'width' in props) {
    return <NextImg {...props} className={clsx(styles.img, className)} />;
  }

  return <DefaultImg {...props} className={clsx(styles.img, className)} />;
};

export { BaseImg };
