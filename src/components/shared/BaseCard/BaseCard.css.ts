import { style } from '@vanilla-extract/css';

export const styles = {
  cardListItem: style({
    width: 300,
    height: 400,
    margin: '0 auto',
    border: 'solid 0.6px rgb(211, 211, 211)',
    boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.25)',
    borderRadius: 8
  }),
  cardImg: style({
    objectFit: 'cover',
    padding: 8,
    margin: '0 auto'
  }),
  title: style({
    fontSize: '1.3em',
    lineHeight: '0em',
    textAlign: 'center',
    paddingTop: 8
  }),
  sectionBar: style({
    borderBottom: '1px dashed black'
  }),
  cardCaption: style({
    wordBreak: 'break-word'
  }),
  description: style({
    padding: 8,
    minHeight: 64,
    maxHeight: 72
  })
};
