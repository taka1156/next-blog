import { style } from '@vanilla-extract/css';

export const styles = {
  baseNavIconBox: style({
    top: 0,
    marginTop: 0,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 0
  }),
  indexNav: style({
    position: 'fixed',
    right: 10,
    bottom: 40,
    zIndex: 2,
    width: 50,
    height: 55,
    padding: 5,
    backgroundColor: 'rgb(100 149 237 / 90%)'
  })
};
