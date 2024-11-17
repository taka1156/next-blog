import { style } from '@vanilla-extract/css';

export const styles = {
  relativeArticleList: style({
    marginBottom: 30
  }),
  relativeArticleListBox: style({
    display: 'flex',
    flexDirection: 'column'
  }),
  baseHeading2RelativeArticleList: style({
    padding: '0.4em 0.5em',
    color: '#494949',
    textAlign: 'left',
    background: '#f4f4f4',
    borderLeft: '3px solid cornflowerblue'
  }),
  baseHeading3RelativeArticleList: style({
    color: 'rgb(100 149 237)',
    textAlign: 'left',
    borderBottom: '1px solid #eaecef'
  }),
  baseTextRelativeArticleList: style({
    marginLeft: 5,
    textAlign: 'left'
  })
};
