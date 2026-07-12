import { style } from '@vanilla-extract/css';
import { THEME_COLOR } from '@/constants/theme';

export const styles = {
  errorWrapper: style({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    fontFamily: 'sans-serif',
    fontWeight: 100,
    color: '#47494e',
    textAlign: 'center',
    background: '#f7f8fb',
    WebkitFontSmoothing: 'antialiased'
  }),
  title: style({
    marginTop: '1.5rem',
    fontSize: '1.25rem',
    fontWeight: 400
  }),
  description: style({
    marginTop: '0.75rem',
    fontSize: '0.9rem',
    lineHeight: 1.6
  }),
  errorLink: style({
    display: 'inline-block',
    marginTop: '0.75rem',
    color: THEME_COLOR.main,
    textDecoration: 'underline'
  })
};
