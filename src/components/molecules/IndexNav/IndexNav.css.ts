import { style } from '@vanilla-extract/css';

export const styles = {
  indexNav: style({
    position: 'fixed',
    right: 10,
    bottom: 50,
    zIndex: 2,
    width: 50,
    height: 55,
    padding: 0,
    margin: 'auto',
    backgroundColor: 'rgb(100 149 237 / 90%)'
  }),
  baseNavIconBox: style({
    top: 0,
    marginTop: 0,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 0
  })
};
