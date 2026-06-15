import { style } from '@vanilla-extract/css';

export const styles = {
  snsIcons: style({
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    margin: '20px auto',
  }),
  snsIcon: style({
    display: 'block'
  })
};
