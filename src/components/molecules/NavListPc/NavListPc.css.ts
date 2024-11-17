import { style } from '@vanilla-extract/css';

export const styles = {
  navListPc: style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
    padding: 0,
    margin: 0
  }),
  navListItemPc: style({
    width: '20%',
    padding: 0,
    margin: '0 1px'
  })
};
