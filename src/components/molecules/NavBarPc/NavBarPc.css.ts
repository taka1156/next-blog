import { style } from '@vanilla-extract/css';

export const styles = {
  baseLinkNavBarPc: style({
    display: 'block',
    height: 30,
    marginTop: 10,
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
    width: '70%',
    height: '85%',
    marginTop: '0.5em',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 'auto',
    '@media': {
      'screen and (width >= 1600px)': {
        width: '50%'
      }
    }
  })
};
