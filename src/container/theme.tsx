import red from '@material-ui/core/colors/red';
import { createMuiTheme, responsiveFontSizes  } from '@material-ui/core/styles';

let theme = createMuiTheme({
  typography: {
  },
  palette: {
    primary: {
      main: '#040d2e',
    },
    secondary: {
      main: '#ffe400',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

theme = responsiveFontSizes(theme, {
  breakpoints: ['sm', 'md', 'lg'],
  disableAlign: true
});

export default theme;