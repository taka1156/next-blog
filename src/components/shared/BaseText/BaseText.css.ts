import {
  FONT_COLOR,
  FONT_COLORS,
  FONT_SIZE,
  FONT_SIZES,
  FONT_WEIGHT,
  FONT_WEIGHTS
} from '@/constants/thema';
import { style } from '@vanilla-extract/css';

export const colorStyles: Record<FONT_COLOR, string> = {
  base: style({
    color: FONT_COLORS.base
  }),
  strong: style({
    color: FONT_COLORS.strong
  }),
  highlight: style({
    color: FONT_COLORS.highlight
  })
};

export const weightStyles: Record<FONT_WEIGHT, string> = {
  regular: style({ fontWeight: FONT_WEIGHTS.regular }),
  bold: style({ fontWeight: FONT_WEIGHTS.bold })
};

export const sizeStyles: Record<FONT_SIZE, string> = {
  extraSmall: style({
    fontSize: FONT_SIZES.extraSmall
  }),
  small: style({ fontSize: FONT_SIZES.small }),
  medium: style({ fontSize: FONT_SIZES.medium }),
  large: style({ fontSize: FONT_SIZES.large }),
  extraLarge: style({
    fontSize: FONT_SIZES.extraLarge
  })
};
