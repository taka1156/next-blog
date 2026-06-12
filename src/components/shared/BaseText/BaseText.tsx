import {
  FONT_COLOR,
  FONT_COLORS,
  FONT_SIZE,
  FONT_SIZES,
  FONT_WEIGHT,
  FONT_WEIGHTS
} from '@/constants/thema';
import clsx from 'clsx';
import { ComponentProps } from 'react';
import { colorStyles, sizeStyles, weightStyles } from './BaseText.css';

type BaseTextProps = ComponentProps<'p'> & {
  color?: FONT_COLOR;
  weight?: FONT_WEIGHT;
  size?: FONT_SIZE;
};

const BaseText = ({
  color = 'base',
  weight = 'regular',
  size = 'medium',
  ...props
}: BaseTextProps) => {
  return (
    <p
      {...props}
      className={clsx(colorStyles[color], weightStyles[weight], sizeStyles[size])}
    />
  );
};

export { BaseText };
