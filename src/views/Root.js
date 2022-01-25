import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyles';
import Footer from '../Components/organisms/Footer/Footer';
import Header from '../Components/organisms/Header/Header';

import { theme } from '../utils/theme';
import Main from '../Components/organisms/Main/Main';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main>Content</Main>
      <Footer />
    </ThemeProvider>
  );
}

export default Root;
