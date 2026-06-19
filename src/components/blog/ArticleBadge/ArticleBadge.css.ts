import { style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    display: 'block',
    height: 30,
    width: 150,
    border: 1,
    margin: 5,
    borderRadius: 20
  }),
  common: style({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'middle',
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
    margin: 5
  }),
  articleBadgeText: style({
    display: 'block',
    fontSize: 12,
    lineHeight: '50%',
    padding: 1
  })
};
