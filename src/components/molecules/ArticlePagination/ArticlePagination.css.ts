import { style } from '@vanilla-extract/css';

export const styles = {
  articlePagination: style({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: 15,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 'auto'
  }),
  baseLinkPagination: style({
    padding: 10,
    fontSize: 20,
    color: 'rgb(100 149 237)',
    background: 'transparent',
    border: 'none'
  }),
  baseTextPagination: style({
    padding: 10,
    fontSize: 20,
    color: 'rgb(100 149 237)'
  })
};
