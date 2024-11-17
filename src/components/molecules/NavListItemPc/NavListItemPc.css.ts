import { style } from '@vanilla-extract/css';

export const styles = {
  navListItemPc: style({
    display: 'block',
    fontSize: 18,
    textAlign: 'left'
  }),
  navListItemPcContents: style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 0,
    margin: 0
  }),
  baseTextNavListItemPc: style({
    color: 'white'
  }),
  baseLinkNavListItemPc: style({
    display: 'block',
    height: 30,
    marginTop: 10,
    fontSize: '1.3em'
  })
};
