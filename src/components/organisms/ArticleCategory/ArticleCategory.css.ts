import { style } from '@vanilla-extract/css';

export const styles = {
  articleBadgeCategory: style({
    width: 130,
    color: 'white',
    backgroundColor: 'rgb(100 149 237)',
    border: 0
  }),
  articleCategory: style({
    display: 'flex',
    justifyContent: 'space-between',
    margin: 5
  })
};
