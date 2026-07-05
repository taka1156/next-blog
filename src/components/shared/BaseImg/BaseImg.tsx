'use client';
import Image, { ImageProps } from 'next/image';
import clsx from 'clsx';
import { microCMSLoader } from '@/utils/imgix';
import { styles } from './BaseImg.css';

type BaseCommonImgProps = {
  src: string;
  alt: string;
  className?: string;
};

type DefaultImgProps = BaseCommonImgProps &
  React.ImgHTMLAttributes<HTMLImageElement>;
type NextImgProps = BaseCommonImgProps & ImageProps;

const isNextImgProps = (
  props: DefaultImgProps | NextImgProps
): props is NextImgProps => 'fill' in props || 'height' in props || 'width' in props;

/**
 * 画像を表示するコンポーネント
 * Next.jsのImageコンポーネントを使用しているため、レスポンシブ対応や最適化が可能
 *
 * srcにURLを渡すとNext.jsのImageコンポーネントが使用され、ローカルの画像パスを渡すと通常のimgタグが使用される
 *
 * classNameを渡すことで、スタイルの上書きが可能
 */
const BaseImg = ({ className, ...props }: DefaultImgProps | NextImgProps) => {
  if (isNextImgProps(props)) {
    return (
      <Image
        {...props}
        className={clsx(styles.img, className)}
        loader={microCMSLoader}
      />
    );
  }

  return <img {...props} className={clsx(styles.img, className)} />;
};

export { BaseImg };
