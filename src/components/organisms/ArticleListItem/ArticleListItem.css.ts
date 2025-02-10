import { style } from '@vanilla-extract/css';

export const styles = {
  baseLinkArticleListItem: style({
    color: 'rgb(100 149 237)',
    ':hover': {
      color: 'rgb(100 149 237 / 60%)'
    }
  }),
  baseTextArticleListItem: style({
    marginLeft: 5,
    textAlign: 'left'
  }),
  baseHeading2ArticleListItem: style({
    marginLeft: 5,
    textAlign: 'left'
  }),
  articleListItem: style({
    display: 'block',
    padding: 10,
    margin: 10,
    border: '1px solid rgb(100 149 237)',
    borderRadius: 5
  }),
  articleListItemBorder: style({
    margin: 5,
    border: '1px solid lightgray'
  })
};
