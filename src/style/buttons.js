import colors from './colors';
import darken from '../internal/darken';

const style = {
  button: {
    width: '48px',
    height: '48px',
    padding: '12px',
    outline: 0,
    background: 'none',
    border: 0,
    borderRadius: '50%',
    transition: 'background-color .3s ease-in-out',
    backgroundColor: colors.white,
    '&:hover': {
      backgroundColor: darken(colors.white, 0.05)
    },
    '&:active': {
      backgroundColor: darken(colors.white, 0.15)
    }
  }
};

export default style;
