import { style } from '@vanilla-extract/css';

export const styles = {
  articleBadge: style({
    display: 'flex',
    justifyContent: 'center',
    padding: 2,
    cursor: 'pointer',
    borderRadius: 20
  }),
  articleBadgeText: style({
    fontSize: 12,
    lineHeight: 30
  })
};
