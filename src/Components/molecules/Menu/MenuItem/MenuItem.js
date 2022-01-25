import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledMenuItem } from './MenuItem.styles';

const MenuItem = ({ icon, url, type }) => {
  return (
    <StyledMenuItem>
      <a href={url} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={[`${type}`, `${icon}`]} />
      </a>
    </StyledMenuItem>
  );
};

export default MenuItem;
