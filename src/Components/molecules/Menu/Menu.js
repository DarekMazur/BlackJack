import React from 'react';
import { socialMedia } from '../../../assets/data';
import { StyledMenu } from './Menu.styles';
import MenuItem from './MenuItem/MenuItem';

const Menu = () => {
  return (
    <StyledMenu>
      {socialMedia.map((social) => (
        <MenuItem url={social.url} icon={social.icon} type={social.type} />
      ))}
    </StyledMenu>
  );
};

export default Menu;
