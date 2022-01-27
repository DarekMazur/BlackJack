import React from 'react';
import NavigationList from '../../molecules/NavigationList/NavigationList';
import { StyledNavigation } from './Navigation.styles';

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavigationList />
    </StyledNavigation>
  );
};

export default Navigation;
