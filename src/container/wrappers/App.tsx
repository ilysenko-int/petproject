import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme';

import AppBar from '../components/header'

interface AppProps {
  routes: React.FC,
}

const App: React.FC<AppProps> = (props) => {
  const Routes = props.routes;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
