import { style } from '@vanilla-extract/css';

export const styles = {
  baseHeading1ClassificationTitle: style({
    padding: 5,
    fontSize: '1.5rem'
  }),
  baseImgClassificationTitle: style({
    width: 50,
    height: 50,
    border: '0.5px solid rgb(230 230 230)',
    borderRadius: 8,
    boxShadow: '15px 15px 10px 0 rgb(245 245 245 / 60%)'
  }),
  classificationTitle: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }),
  classificationTitleBorder: style({
    margin: 5,
    border: '1px solid lightgray'
  })
};
