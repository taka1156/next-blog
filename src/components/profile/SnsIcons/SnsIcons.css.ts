import { style } from '@vanilla-extract/css';

export const styles = {
  snsIcons: style({
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    margin: 0
  }),
  snsIcon: style({
    display: 'block',
    width: 50,
    height: 50,
    border: '1px solid #ccc',
    borderRadius: '50%'
  })
};
