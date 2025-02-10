'use client';
import Image, { ImageProps } from 'next/image';
import clsx from 'clsx';
import { microCMSLoader } from '@/utils/imgix';
import { styles } from './BaseImg.css';
import React from 'react';

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
  return <Image {...props} src={src} alt={alt} />;
};

const BaseImg = ({
  className,
  size,
  ...props
}: (DefaultImgProps | NextImgProps) & { size: 'sm' | 'lg' | 'free' }) => {
  const classes = clsx(styles.img, styles[size], className);

  if ('fill' in props || 'height' in props || 'width' in props) {
    return <NextImg {...props} className={classes} />;
  }

  return <DefaultImg {...props} className={classes} />;
};

export { BaseImg };
