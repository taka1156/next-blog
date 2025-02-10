import { style } from '@vanilla-extract/css';

export const styles = {
  baseLinkNavListItemPc: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'middle',
    fontSize: '1.3em',
    height: 30,
    marginTop: 10
  }),
  baseTextNavListItemPc: style({
    color: 'white',
    margin: '0 auto'
  }),
  navListItemPcImg: style({
    width: 20,
    height: 20,
    marginLeft: 5,
    marginRight: 5
  })
};
