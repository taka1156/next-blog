import { style } from '@vanilla-extract/css';

export const styles = {
  common: style({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
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
    objectFit: 'contain',
    margin: 5
  }),
  articleBadgeText: style({
    display: 'block',
    lineHeight: '50%',
    padding: 1
  })
};
