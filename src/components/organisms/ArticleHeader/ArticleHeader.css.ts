import { style } from '@vanilla-extract/css';

export const styles = {
  baseHeading1ArticleHeader: style({
    padding: '10px 0 0',
    marginLeft: 5,
    fontSize: '1.75rem',
    color: 'rgb(100 149 237)',
    textAlign: 'left',
    borderTop: '2.5px solid lightgray'
  }),
  articleHeader: style({
    padding: 10,
    backgroundColor: 'whitesmoke',
    border: '1px solid lightgray'
  })
};
