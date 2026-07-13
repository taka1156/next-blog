import { style } from '@vanilla-extract/css';

export const styles = {
  articleTag: style({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 8
  }),
  container: style({
    border: 1,
    margin: 4,
    borderRadius: 20
  })
};
