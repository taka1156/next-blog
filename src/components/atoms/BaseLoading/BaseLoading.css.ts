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
  loading: style({
    width: 100,
    height: 100,
    margin: '50% auto',
    backgroundColor: 'cornflowerblue',
    borderRadius: '100%',
    animation: `${spinnerAnime} 0.5s infinite`
  })
};
