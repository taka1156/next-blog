import { style } from '@vanilla-extract/css';

export const styles = {
  baseLinkNavListItem: style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'middle',
    height: 30,
    marginTop: 20
  }),
  baseTextNavListItem: style({
    color: 'white',
    fontSize: 40,
    margin: 0
  }),
  navItemImg: style({
    width: 40,
    height: 40,
    marginLeft: 5,
    marginRight: 5
  })
};
