import { style } from '@vanilla-extract/css';

export const styles = {
  common: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    height: '1.5rem',
    width: '6rem',
    borderRadius: 20
  }),
  category: style({
    color: 'white',
    backgroundColor: 'rgb(100 149 237)'
  }),
  tag: style({
    color: 'rgb(100 149 237)',
    backgroundColor: 'transparent',
    border: '1px solid rgb(100 149 237)'
  }),
  articleBadgeImg: style({
    width: 20,
    height: 20,
    objectFit: 'contain'
  }),
  articleBadgeText: style({
    display: 'block',
    padding: 1
  })
};
