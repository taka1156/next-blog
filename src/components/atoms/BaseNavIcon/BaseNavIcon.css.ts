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
  navIcon: style({
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

  navIconTopClose: style({
    transform: 'translateY(-10px)'
  }),

  navIconBottomClose: style({
    transform: 'translateY(10px)'
  }),

  navIconTopOpen: style({
    transform: 'rotate(-45deg)',
    animation: `${top} 0.6s ease`
  }),

  navIconMiddleFade: style({
    opacity: 0,
    animation: `${middle} 0.6s ease`
  }),

  navIconBottomOpen: style({
    transform: 'rotate(45deg)',
    animation: `${bottom} 0.6s ease`
  }),

  navIconText: style({
    display: 'block',
    width: 50,
    height: 10,
    marginTop: 30,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 0,
    fontSize: 10,
    color: 'white'
  })
};
