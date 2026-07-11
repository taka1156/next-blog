import { style } from '@vanilla-extract/css';

export const styles = {
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
    margin: '0.5em auto'
  }),
  navBarLink: style({
    display: 'block',
    height: 30,
    margin: 10,
    fontSize: '1.3em',
    color: 'white'
  }),
  navList: style({
    listStyleType: 'none',
    position: 'fixed',
    top: 60,
    right: 0,
    left: 0,
    zIndex: 3,
    display: 'flex',
    gap: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    margin: 0,
    backgroundColor: 'rgb(100 149 237 / 70%)'
  }),
  /* nav-contentsのアニメーション */
  navFadeEnter: style({
    opacity: 0
  }),
  navFadeLeaveTo: style({
    opacity: 0
  }),
  navFadeEnterTo: style({
    opacity: 1
  }),
  navFadeLeaveActive: style({
    transition: 'opacity 0.6s ease'
  }),
  navListItemLink: style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 30
  }),
  navListItemText: style({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }),
  navListItemImg: style({
    width: 40,
    height: 40,
    marginLeft: 5,
    marginRight: 5
  })
};
