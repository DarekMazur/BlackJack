import React from 'react';
import { StyledNavigation } from './Navigation.styles';

const Navigation = () => {
  return (
    <StyledNavigation>
      <ul>
        <li>Start new game</li>
        <li>Continuue</li>
        <li>Load game</li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
