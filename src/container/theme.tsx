import red from '@material-ui/core/colors/red';
import { createMuiTheme, responsiveFontSizes  } from '@material-ui/core/styles';

// A custom theme for this app
let theme = createMuiTheme({
  typography: {
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#ffe400',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

theme = responsiveFontSizes(theme, {
  breakpoints: ['sm', 'md', 'lg'],
  disableAlign: true
});

export default theme;