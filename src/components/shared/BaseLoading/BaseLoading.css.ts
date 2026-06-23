import { keyframes, style } from '@vanilla-extract/css';

const spinnerAnime = keyframes({
  from: {
    transform: 'scale(0)'
  },
  to: {
    opacity: 0,
    transform: 'scale(1)'
  }
});

export const styles = {
  spinner: style({
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
    borderRadius: '100%',
    animation: `${spinnerAnime} 1s infinite`
  })
};
