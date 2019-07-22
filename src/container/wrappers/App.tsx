import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme';

import AppBar from '../components/header'
import Footer from '../components/footer'
import { Container } from '@material-ui/core';

interface AppProps {
  routes: React.FC,
}

const App: React.FC<AppProps> = (props) => {
  const Routes = props.routes;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <Container  style={{ padding: 0, paddingTop: 80}}>
         <Routes />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
