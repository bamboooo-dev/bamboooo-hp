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
    error: {
      main: red.A400,
    },
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
