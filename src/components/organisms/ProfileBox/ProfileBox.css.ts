import { style } from '@vanilla-extract/css';

export const styles = {
  baseImgProfileBox: style({
    display: 'block',
    height: '88%',
    width: '25%',
    padding: 0,
    margin: 10
  }),
  baseTextProfileBox: style({
    width: '75%',
    padding: 10,
    marginTop: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 0,
    fontSize: 14,
    lineHeight: 'normal',
    textAlign: 'left',
    borderLeft: '0.5px dotted rgb(100 149 237 / 90%)',
    '@media': {
      'screen and (width >= 768px)': {
        fontSize: 18
      }
    }
  }),
  profileBox: style({
    display: 'flex',
    justifyContent: 'center',
    width: '85%',
    height: 150,
    padding: 0,
    marginTop: 0,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 'auto',
    border: '0.5px solid rgb(100 149 237 / 90%)',
    borderRadius: 5
  })
};
