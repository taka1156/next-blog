import { style } from '@vanilla-extract/css';

export const styles = {
  articleCategory: style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
    padding: 8
  }),
  container: style({
    margin: 4,
    borderRadius: 20
  })
};
