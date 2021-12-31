import { red } from '@mui/material/colors';
import { createTheme, adaptV4Theme } from '@mui/material/styles';

const theme = createTheme(adaptV4Theme({
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
    MuiDialog: {
      paper: {
        margin: "0",
      }
    },
  },
}));

theme.typography.body1 = {
  fontSize: 18,
  [theme.breakpoints.down('md')]: {
    fontSize: 13,
  },
}

export default theme;
