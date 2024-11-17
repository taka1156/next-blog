import { style } from '@vanilla-extract/css';

export const styles = {
  githubStatus: style({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '85%',
    marginTop: 0,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 'auto',
    border: '0.5px solid rgb(100 149 237 / 90%)',
    borderRadius: 5
  }),
  baseImgGithubStatus: style({
    width: '100%',
    margin: 0,
    '@media': {
      'screen and (width >= 768px)': {
        width: '40%'
      }
    }
  })
};
