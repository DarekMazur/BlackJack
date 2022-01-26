import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../styles/globalStyles';
import Footer from '../organisms/Footer/Footer';
import Header from '../organisms/Header/Header';
import Main from '../organisms/Main/Main';

import { theme } from '../../utils/theme';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
