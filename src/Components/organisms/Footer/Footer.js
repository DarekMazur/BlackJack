import React from 'react';
import { getYear } from '../../../utils/helpers';
import { StyledFooter } from './Footer.styles';
import { FooterCopy } from './FooterCopy/FooterCopy.styles';
import FooterSocialMenu from './FooterSocialMenu/FooterSocialMenu';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterCopy>{getYear()} &copy; DarekMazur</FooterCopy>
      <FooterSocialMenu />
    </StyledFooter>
  );
};

export default Footer;
