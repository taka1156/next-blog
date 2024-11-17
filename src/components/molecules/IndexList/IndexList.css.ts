import { style } from '@vanilla-extract/css';

export const styles = {
  indexList: style({
    position: 'fixed',
    right: 10,
    bottom: 110,
    zIndex: 2,
    width: '55%',
    height: 250,
    overflowY: 'scroll',
    backgroundColor: 'white',
    border: '1px solid rgb(100 149 237 / 90%)',
    '::-webkit-scrollbar': {
      width: 8
    },
    '::-webkit-scrollbar-track': {
      display: 'none'
    },
    '::-webkit-scrollbar-thumb': {
      width: '100%',
      backgroundColor: 'gray',
      borderRadius: 5
    },
    '@media': {
      'screen and (width >= 790px)': {
        width: '30%'
      }
    }
  }),
  indexListBox: style({
    marginTop: '0',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 'auto'
  }),
  indexListItemBox: style({
    margin: 10,
    textAlign: 'left'
  }),
  baseHeading3IndexList: style({
    color: 'rgb(100 149 237 / 90%)',
    textAlign: 'center'
  })
};
