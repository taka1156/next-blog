import { responsiveDown } from '@/utils/breakpoint';
import { style } from '@vanilla-extract/css';

export const styles = {
  githubStatus: style({
    display: 'flex',
    justifyContent: 'center',
    border: '0.5px solid rgb(100 149 237 / 90%)',
    borderRadius: 8,
    ...responsiveDown({
      sp: {
        flexDirection: 'column',
        marginTop: 20
      }
    })
  }),
  githubStatusImg: style({
    height: 'auto',
    width: '40%',
    margin: 0,
    ...responsiveDown({
      sp: {
        width: '100%',
        marginBottom: 16
      }
    })
  })
};
