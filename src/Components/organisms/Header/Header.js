import React from 'react';
import { StyledTitle } from '../../atoms/Title/Title.styles';
import { StyledHeader } from './Header.styles';

import token from '../../../assets/images/token.png';
import Image from '../../atoms/Image/Image';

const Header = () => {
  return (
    <StyledHeader>
      <Image url={token} alt="" />
      <StyledTitle>Black Jack</StyledTitle>
      <Image url={token} alt="" />
    </StyledHeader>
  );
};

export default Header;
