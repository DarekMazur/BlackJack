import React from 'react';
import background from '../../../assets/images/background.jpg';
import { StyledHome } from './HomeScreen.styles';

const HomeScreen = () => {
  return (
    <StyledHome background={background}>
      <div>lorem</div>
      <div>ipsum</div>
    </StyledHome>
  );
};

export default HomeScreen;
