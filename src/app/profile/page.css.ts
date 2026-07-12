import { responsiveDown } from '@/utils/breakpoint';
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
    textAlign: 'center',
    padding: '0 0 10px',
    borderBottom: '2.5px solid lightgray'
  }),
  profileSubHeading: style({
    textAlign: 'center',
    fontSize: '1.25em'
  }),
  cardList: style({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    ...responsiveDown({
      sp: {
        gridTemplateColumns: '1fr'
      }
    })
  })
};
