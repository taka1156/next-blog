import { globalStyle } from '@vanilla-extract/css';

/* css reset */
globalStyle('header, footer', {
  margin: 0,
  padding: 0,
});
/* css reset */

globalStyle('.app', {
  textAlign: 'center',
});

globalStyle('.container', {
  margin: '70px auto 0',
});

globalStyle('.box', {
  margin: '0 auto',
  minHeight: '90vh',
  padding: 0,
  '@media': {
    'screen and (width >= 768px)': {
      width: '70vw',
    },
    'screen and (width >= 1600px)': {
      width: '50vw',
    },
  },
});

/* transition */
globalStyle('.slide-in-up-enter', {
  opacity: 0,
  transform: 'translate(0, 100px)',
});

globalStyle('.slide-in-up-enter-to', {
  opacity: 1,
});

globalStyle('.slide-in-up-enter-active', {
  transition: 'all 1s 0s ease',
});

globalStyle('.slide-in-up-leave', {
  opacity: 1,
  transform: 'translate(0, 0)',
});

globalStyle('.slide-in-up-leave-to', {
  opacity: 0,
  transform: 'translate(0, -100px)',
});

globalStyle('.slide-in-up-leave-active', {
  transition: 'all 0.2s 0s ease',
});

/* markdown */
globalStyle('.markdown-body h1, .markdown-body h2, .markdown-body h3', {
  color: '#494949',
  background: '#f4f4f4',
  borderLeft: '3px solid cornflowerblue',
  padding: '0.4em 0.5em',
});

globalStyle('.markdown-body img', {
  border: '0.2px solid cornflowerblue',
  padding: '5px',
});

globalStyle('.markdown-body a', {
  textDecoration: 'underline',
});

globalStyle('.markdown-body pre', {
  border: '1px dotted gray',
});

globalStyle('.markdown-body .container', {
  padding: '1px',
});

globalStyle(
  `.markdown-body .container .point-summary,
   .markdown-body .container .info-summary,
   .markdown-body .container .warn-summary,
   .markdown-body .container .alert-summary`,
  {
    margin: '10px',
    fontWeight: 600,
  },
);

globalStyle(
  `.markdown-body .container .point-details,
   .markdown-body .container .info-details,
   .markdown-body .container .warn-details,
   .markdown-body .container .alert-details`,
  {
    margin: '20px',
    marginTop: '5px',
    marginBottom: '5px',
  },
);

globalStyle('.markdown-body .point', {
  backgroundColor: '#d0e6f6',
});

globalStyle('.markdown-body .info', {
  backgroundColor: '#e3f7df',
});

globalStyle('.markdown-body .warn', {
  backgroundColor: '#fdf9e2',
});

globalStyle('.markdown-body .alert', {
  backgroundColor: '#feebee',
});
