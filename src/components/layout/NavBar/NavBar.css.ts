import { style } from '@vanilla-extract/css';

export const styles = {
  baseLinkNavBar: style({
    display: 'block',
    height: 30,
    margin: 10,
    fontSize: '1.3em',
    color: 'white'
  }),
  navBar: style({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 2,
    width: '100%',
    height: 60,
    backgroundColor: 'rgb(100 149 237 / 90%)'
  }),
  navBarBox: style({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '85%',
    marginTop: '0.5em',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 'auto'
  })
};
