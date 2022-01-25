import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Menu from '../../../molecules/Menu/Menu';
import { StyledMenu } from '../../../molecules/Menu/Menu.styles';
import { StyledMenuItem } from '../../../molecules/Menu/MenuItem/MenuItem.styles';

const FooterSocialMenu = () => {
  return (
    <Menu />
    // <StyledMenu>
    //   <StyledMenuItem>
    //     <FontAwesomeIcon icon={['fab', 'twitter-square']} />
    //   </StyledMenuItem>
    //   <StyledMenuItem>
    //     <FontAwesomeIcon icon={['fab', 'instagram']} />
    //   </StyledMenuItem>
    //   <StyledMenuItem>
    //     <FontAwesomeIcon icon={['fab', 'github']} />
    //   </StyledMenuItem>
    // </StyledMenu>
  );
};

export default FooterSocialMenu;
