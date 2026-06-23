import { style } from '@vanilla-extract/css';

export const styles = {
  navIconBox: style({
    top: 0,
    marginTop: 0,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 0
  }),
  indexNav: style({
    position: 'fixed',
    right: 10,
    bottom: 40,
    zIndex: 2,
    width: 50,
    height: 50,
    padding: 4,
    backgroundColor: 'rgb(100 149 237 / 90%)'
  }),
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
      borderRadius: 8
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
  indexListHeading: style({
    color: 'rgb(100 149 237 / 90%)',
    textAlign: 'center'
  }),
  indexListItemBox: style({
    margin: 10,
    textAlign: 'left'
  }),
  indexListItem: style({
    fontSize: 15,
    color: 'rgb(100 149 237)',
    textDecoration: 'underline',
    cursor: 'pointer',
    '@media': {
      'screen and (width >= 790px)': {
        fontSize: 20
      }
    }
  })
};
