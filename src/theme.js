import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const lightTheme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      '"Helvetica"',
      '"Hiragino Sans"',
      '"Hiragino Kaku Gothic ProN"',
      '"Arial"',
      '"Yu Gothic"',
      '"Meiryo"',
      'sans-serif',
    ].join(','),
    h2: {
      '@media (max-width:1280px)': {
        fontSize: '1.2rem',
      },
    },
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
