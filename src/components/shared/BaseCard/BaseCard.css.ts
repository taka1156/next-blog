import { style } from '@vanilla-extract/css';

export const styles = {
  cardListItem: style({
    width: '100%',
    height: '100%',
    margin: '0 auto',
    border: 'solid 0.6px rgb(211, 211, 211)',
    boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.25)'
  }),
  title: style({
    fontSize: '1.3em',
    lineHeight: '0em',
    textAlign: 'center'
  }),
  sectionBar: style({
    borderBottom: '1px dashed black'
  }),
  cardCaption: style({
    padding: 10
  })
};
