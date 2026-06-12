import { style } from '@vanilla-extract/css';

export const styles = {
  snsIcons: style({
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 'auto'
  }),
  snsIcon: style({
    display: 'block'
  })
};
