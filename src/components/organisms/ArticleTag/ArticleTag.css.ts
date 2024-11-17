import { style } from '@vanilla-extract/css';

export const styles = {
  articleBadgeTag: style({
    width: 100,
    margin: 2,
    color: 'rgb(100 149 237)',
    backgroundColor: 'transparent',
    border: '1px solid rgb(100 149 237)'
  }),
  articleTag: style({
    display: 'flex',
    flexWrap: 'wrap',
    margin: 10
  })
};
