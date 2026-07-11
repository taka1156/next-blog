import { style } from '@vanilla-extract/css';

export const styles = {
  articleList: style({
    listStyleType: 'none',
    margin: 0,
    padding: 0
  }),
  articleListItem: style({
    display: 'block',
    padding: 10,
    margin: 10,
    border: '1px solid rgb(100 149 237)',
    borderRadius: 8
  }),
  articleListItemBorder: style({
    margin: 5,
    border: '1px solid lightgray'
  }),
  articleListItemLink: style({
    color: 'rgb(100 149 237)',
    ':hover': {
      color: 'rgb(100 149 237 / 60%)'
    }
  }),
  articleListItemText: style({
    marginLeft: 5,
    textAlign: 'left'
  }),
  articleListItemHeading: style({
    marginLeft: 5,
    textAlign: 'left'
  })
};
