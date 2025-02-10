import { style } from '@vanilla-extract/css';

export const styles = {
  articleDate: style({
    display: 'flex',
    margin: 0
  }),
  articleDateImg: style({
    width: 20,
    height: 20,
    fill: 'rgb(100 149 237)'
  }),
  articleDateText: style({
    color: 'rgb(100 149 237)'
  })
};
