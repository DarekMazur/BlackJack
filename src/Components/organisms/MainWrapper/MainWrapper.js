import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import { StyledMainWrapper } from './MainWrapper.styles';

const MainWrapper = ({ children }) => {
  return (
    <StyledMainWrapper>
      <Navigation />
      <Main>{children}</Main>
    </StyledMainWrapper>
  );
};

export default MainWrapper;
