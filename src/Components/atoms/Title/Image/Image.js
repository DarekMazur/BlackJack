import React from 'react';
import { StyledImage } from './Image.styles';

const Image = ({ url, alt }) => {
  return <StyledImage src={url} alt={alt} />;
};

export default Image;
