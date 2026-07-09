import { responsiveDown } from '@/utils/breakpoint';
import { style } from '@vanilla-extract/css';

export const styles = {
  cardListItem: style({
    maxWidth: 400,
    height: 470,
    margin: '0 auto',
    border: 'solid 0.6px rgb(211, 211, 211)',
    boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.25)',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
    ...responsiveDown({
      small: {
        height: 'auto'
      }
    })
  }),
  figure: style({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    margin: 0
  }),
  cardImg: style({
    objectFit: 'fill',
    margin: '0 auto',
    width: '100%',
    height: 200,
    flexShrink: 0,
    boxSizing: 'border-box'
  }),
  title: style({
    fontSize: '1.2em',
    lineHeight: '0em',
    textAlign: 'center',
    paddingTop: 8
  }),
  cardCaption: style({
    wordBreak: 'break-word',
    overflow: 'hidden'
  }),
  description: style({
    minHeight: 64,
    maxHeight: 72,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 4
  }),
  button: style({
    marginTop: 'auto',
    display: 'block',
    width: '100%',
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'cornflowerblue',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: 'rgb(100 149 237 / 80%)'
    }
  }),
  dialog: style({
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'min(90vw, 720px)',
    height: '50vh',
    overflowY: 'auto',
    padding: 24,
    borderRadius: 8,
    border: 'none',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    '::backdrop': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  }),
  dialogHeader: style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    borderBottom: '1px solid rgb(211, 211, 211)',
    paddingBottom: 8
  }),
  dialogClose: style({
    background: 'none',
    border: 'none',
    fontSize: 24,
    lineHeight: 1,
    cursor: 'pointer',
    color: '#666',
    padding: '0 4px',
    ':hover': {
      color: '#000'
    }
  })
};
