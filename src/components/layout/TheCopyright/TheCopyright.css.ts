import { style } from '@vanilla-extract/css';

export const styles = {
  theCopyright: style({
    width: '100%',
    padding: 0,
    margin: 0,
    textAlign: 'left',
    backgroundColor: 'rgb(100 149 237 / 90%)'
  }),
  theCopyrightLink: style({
    color: 'white'
  }),
  theCopyrightText: style({
    margin: 0
  })
};
