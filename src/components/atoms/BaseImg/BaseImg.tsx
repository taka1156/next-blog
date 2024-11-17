import Image from 'next/image';
import clsx from 'clsx';
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
  const classes = clsx(styles.img, styles[size], className);

  if (size !== 'free') {
    return (
      <Image
        loader={microCMSLoader}
        src={imgUrl}
        alt={imgAlt}
        height={sizeList[size].size}
        width={sizeList[size].size}
        className={classes}
      />
    );
  } else {
    return <img src={imgUrl} alt={imgAlt} className={classes} />;
  }
};

export { BaseImg };
