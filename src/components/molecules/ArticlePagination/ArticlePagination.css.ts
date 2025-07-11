import { style } from '@vanilla-extract/css';

export const styles = {
  baseTextPagination: style({
    display: 'block',
    margin: 5,
    padding: 10,
    fontSize: 20,
    color: 'rgb(100 149 237)'
  }),
  baseLinkPagination: style({
    display: 'block',
    margin: 5,
    padding: 10,
    fontSize: 20,
    color: 'rgb(100 149 237)',
    background: 'transparent',
    border: 'none'
  }),
  articlePagination: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'middle',
    width: '100%',
    marginTop: 15,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 'auto'
  })
};
