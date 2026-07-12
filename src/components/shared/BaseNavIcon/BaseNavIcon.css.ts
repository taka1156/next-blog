import { keyframes, style } from '@vanilla-extract/css';

const top = keyframes({
  from: {
    transform: 'translateY(-8px) rotate(0deg)'
  },
  to: {
    transform: 'translateY(0) rotate(-45deg)'
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
    transform: 'translateY(8px) rotate(0deg)'
  },
  to: {
    transform: 'translateY(0) rotate(45deg)'
  }
});

export const styles = {
  buttonReset: style({
    width: 50,
    height: 50,
    padding: 0,
    margin: 0,
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    transition: 'opacity 0.2s ease',
    ':hover': {
      opacity: 0.75
    }
  }),
  navIcon: style({
    position: 'relative',
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    padding: 0,
    margin: 0
  }),
  navIconBorder: style({
    position: 'absolute',
    top: '36%',
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
    transform: 'translateY(-8px)'
  }),
  navIconBottomClose: style({
    transform: 'translateY(8px)'
  }),
  navIconTopOpen: style({
    transform: 'translateY(0) rotate(-45deg)',
    animation: `${top} 0.6s ease forwards`
  }),
  navIconMiddleFade: style({
    opacity: 0,
    animation: `${middle} 0.6s ease`
  }),
  navIconBottomOpen: style({
    transform: 'translateY(0) rotate(45deg)',
    animation: `${bottom} 0.6s ease forwards`
  }),
  navIconText: style({
    position: 'absolute',
    bottom: 4,
    left: 0,
    display: 'block',
    width: '100%',
    textAlign: 'center',
    fontSize: 9,
    letterSpacing: '0.05em',
    color: 'white'
  })
};
