import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme';
import Routes from '../../routes';

import AppBar from '../components/header'
import Footer from '../components/footer'

import { Container } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <Container  style={{ padding: 85 }}>
         <Routes />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
