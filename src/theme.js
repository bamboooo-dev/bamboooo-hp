import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Hiragino Kaku Gothic ProN"',
      '"Hiragino Sans"',
      '"Helvetica Neue"',
      '"Helvetica"',
      '"Arial"',
      '"Yu Gothic"',
      '"Meiryo"',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#6fff00',
    },
    secondary: {
      main: '#19857b',
    },
    tertiary: {
      main: '#4CAF50'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    type: 'light',
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: '#19807BB3',
      },
    },
  },
});

theme.typography.body1 = {
  fontSize: 18,
  [theme.breakpoints.down('sm')]: {
    fontSize: 13,
  },
}

export default theme;
