import { style } from '@vanilla-extract/css';

export const styles = {
  img: style({
    display: 'block',
    padding: 3,
    objectFit: 'contain'
  }),
  sm: style({
    width: 20,
    height: 20
  }),
  lg: style({
    width: 50,
    height: 50
  }),
  free: style({
    height: 'auto'
  })
};
