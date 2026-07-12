import { style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    padding: '2rem'
  }),
  tagTitle: style({
    textAlign: 'center',
    margin: 0,
    padding: '0 0 10px',
    borderBottom: '2.5px solid lightgray'
  })
};
