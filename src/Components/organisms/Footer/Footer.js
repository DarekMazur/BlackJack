import React from 'react';
import { StyledFooter } from './Footer.styles';
import { FooterCopy } from './FooterCopy/FooterCopy.styles';
import FooterSocialMenu from './FooterSocialMenu/FooterSocialMenu';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterCopy>2022 &copy; DarekMazur</FooterCopy>
      <FooterSocialMenu />
    </StyledFooter>
  );
};

export default Footer;
