import { style } from '@vanilla-extract/css';

export const styles = {
  indexListItem: style({
    fontSize: 15,
    color: 'rgb(100 149 237)',
    textDecoration: 'underline',
    cursor: 'pointer',
    '@media': {
      'screen and (width >= 790px)': {
        fontSize: 20
      }
    }
  })
};
