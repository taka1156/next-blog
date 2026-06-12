export const THEME_COLOR = {
  main: '#6495ED',
  sub: '#64DCED',
  accent1: '#EDDD64',
  accent2: '#EDC264',
  accent3: '#EDC264'
};

export type FONT_COLOR = 'base' | 'strong' | 'highlight';
export type FONT_WEIGHT = 'regular' | 'bold';
export type FONT_SIZE = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';

export const FONT_COLORS: Record<FONT_COLOR, string> = {
  base: '#333',
  strong: '#B3B3B3',
  highlight: '#616161'
};

export const FONT_WEIGHTS: Record<FONT_WEIGHT, number> = {
  regular: 400,
  bold: 700
};

export const FONT_SIZES: Record<FONT_SIZE, number> = {
  extraSmall: 10,
  small: 14,
  medium: 16,
  large: 18,
  extraLarge: 22
};
