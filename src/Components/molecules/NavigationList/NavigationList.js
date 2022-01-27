import React from 'react';
import { StyledNavigationListItem } from './NavigationListItem/NavigationListItem.styles';
import { StyledNavigationList } from './NavigationList.styles';

const NavigationList = () => {
  return (
    <StyledNavigationList>
      <StyledNavigationListItem>Start new game</StyledNavigationListItem>
      <StyledNavigationListItem>Continuue</StyledNavigationListItem>
      <StyledNavigationListItem>Load game</StyledNavigationListItem>
    </StyledNavigationList>
  );
};

export default NavigationList;
