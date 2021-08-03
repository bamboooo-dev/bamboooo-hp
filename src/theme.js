import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const coreThemeObj = {
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
  },
  typography: {
    h2 : {
      '@media (max-width:1280px)': {
        fontSize: '1.2rem',
      },
    }
  },
}

export const lightTheme = createMuiTheme({
  ...coreThemeObj,
  palette: {
    ...coreThemeObj.palette,
    background: {
      default: '#fff',
    },
    type: 'light',
  }
});

export const darkTheme = createMuiTheme({
  ...coreThemeObj,
  palette: {
    ...coreThemeObj.palette,
    type: 'dark'
  }
});
