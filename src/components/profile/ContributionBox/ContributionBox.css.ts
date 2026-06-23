import { responsiveDown } from '@/utils/breakpoint';
import { style } from '@vanilla-extract/css';

export const styles = {
  contributionBox: style({
    overflowX: 'scroll',
    border: '0.5px solid rgb(100 149 237 / 90%)',
    borderRadius: 5
  }),
  contributionBoxImg: style({
    height: 150,
    width: 900,
    objectFit: 'cover'
  })
};
