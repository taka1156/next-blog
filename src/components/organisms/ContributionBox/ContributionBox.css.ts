import { style } from '@vanilla-extract/css';

export const styles = {
  baseImgContributionBox: style({
    height: 'auto',
    width: 900,
    objectFit: 'cover'
  }),
  /* gh-chart */
  contributionBox: style({
    width: '85%',
    marginTop: 0,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 'auto',
    overflowX: 'scroll',
    border: '0.5px solid rgb(100 149 237 / 90%)',
    borderRadius: 5
  })
};
