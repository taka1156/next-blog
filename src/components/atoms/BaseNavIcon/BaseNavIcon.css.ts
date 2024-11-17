import { keyframes, style } from '@vanilla-extract/css';

const top = keyframes({
  from: {
    transform: 'rotate(0deg)'
  },

  to: {
    transform: 'rotate(45deg)'
  }
});

const middle = keyframes({
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
});

const bottom = keyframes({
  from: {
    transform: 'rotate(0deg)'
  },
  to: {
    transform: 'rotate(-45deg)'
  }
});

export const styles = {
  buttonReset: style({
    width: 50,
    height: 55,
    padding: 0,
    margin: 0,
    cursor: 'pointer',
    background: 'transparent',
    border: 'none'
  }),
  baseNavIcon: style({
    position: 'relative',
    top: -5,
    right: 0,
    width: 50,
    height: 50,
    padding: 0,
    margin: 0
  }),
  navIconBorder: style({
    position: 'absolute',
    top: 'calc((100% - 2) / 2)',
    right: 0,
    left: 0,
    display: 'block',
    width: '70%',
    height: 2,
    margin: 'auto',
    backgroundColor: '#fff',
    borderRadius: 1
  }),

  baseNavIconTopClose: style({
    transform: 'translateY(-10px)'
  }),

  baseNavIconBottomClose: style({
    transform: 'translateY(10px)'
  }),

  baseNavIconTopOpen: style({
    transform: 'rotate(-45deg)',
    animation: `${top} 0.6s ease`
  }),

  baseNavIconMiddleFade: style({
    opacity: 0,
    animation: `${middle} 0.6s ease`
  }),

  baseNavIconBottomOpen: style({
    transform: 'rotate(45deg)',
    animation: `${bottom} 0.6s ease`
  }),

  baseNavIconText: style({
    display: 'block',
    width: 50,
    height: 10,
    marginTop: 30,
    marginBottom: 0,
    fontSize: 10,
    color: 'white'
  })
};
