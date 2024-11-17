import { style } from '@vanilla-extract/css';

export const styles = {
  navList: style({
    position: 'fixed',
    top: 60,
    right: 0,
    left: 0,
    zIndex: 3,
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
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
  })
};
