import { style } from '@vanilla-extract/css';

export const styles = {
  articleTag: style({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 10,
    padding: 8
  }),
  container: style({
    display: 'block',
    height: 30,
    width: 110,
    border: 1,
    margin: 5,
    borderRadius: 20
  })
};
