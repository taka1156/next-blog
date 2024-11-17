import { style } from '@vanilla-extract/css';

export const styles = {
  navItem: style({
    display: 'block',
    fontSize: 50,
    textAlign: 'left'
  }),
  baseTextNavListItem: style({
    color: 'white'
  }),
  baseLinkNavListItem: style({
    display: 'flex',
    width: '100%'
  })
};
