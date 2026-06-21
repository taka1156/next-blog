import { style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    padding: '2rem'
  }),
  contents: style({
    margin: '16px'
  }),
  profileHeading: style({
    padding: '0 0 10px',
    borderBottom: '2.5px solid lightgray'
  }),
  profileSubHeading: style({
    fontSize: '1.25em'
  })
};
