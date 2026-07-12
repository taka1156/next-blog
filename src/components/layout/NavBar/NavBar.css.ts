import { style } from '@vanilla-extract/css';

export const styles = {
  navBar: style({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 2,
    width: '100%',
    height: '13vh',
    backgroundColor: 'rgb(100 149 237 / 90%)'
  }),
  navBarLogo: style({
    margin: 0,
    padding: 8,
    height: 24,
    width: 140
  }),
  navBarBox: style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '0.5em',
    '@media': {
      'screen and (width >= 1600px)': {
        width: '50%'
      }
    }
  }),
  navList: style({
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    padding: 0,
    margin: 0
  }),
  navListItemLink: style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    marginTop: 10
  }),
  navListItemText: style({
    color: 'white',
    margin: '0 auto'
  }),
  navListItemImg: style({
    width: 20,
    height: 20,
    marginLeft: 4,
    marginRight: 4
  })
};
