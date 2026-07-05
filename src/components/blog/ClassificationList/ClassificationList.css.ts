import { style } from '@vanilla-extract/css';

export const styles = {
  baseLinkClassificationListItem: style({
    color: 'black',
    textAlign: 'left',
    wordBreak: 'break-word',
    overflowWrap: 'break-word'
  }),
  classificationListItem: style({
    display: 'block',
    padding: 10,
    margin: 10,
    cursor: 'pointer',
    border: '1px solid rgb(100 149 237)',
    borderRadius: 8
  }),
  classificationListItemBox: style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }),
  classificationListItemImg: style({
    width: 50,
    height: 50
  })
};
