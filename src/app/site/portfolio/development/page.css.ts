import { style } from '@vanilla-extract/css';
import { responsiveDown } from '@/utils/breakpoint';

export const styles = {
  container: style({
    padding: '2rem'
  }),
  developmentHeading: style({
    padding: '0 0 10px',
    borderBottom: '2.5px solid lightgray'
  }),
  cardList: style({
    padding: '2rem',
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
