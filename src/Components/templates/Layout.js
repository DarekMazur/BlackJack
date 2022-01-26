import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../styles/globalStyles';
import Footer from '../organisms/Footer/Footer';

import { theme } from '../../utils/theme';
import MainWrapper from '../organisms/MainWrapper/MainWrapper';
import Header from '../organisms/Header/Header';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
