import React from 'react';
import { StyledImage } from './Image.styles';

const Image = ({ url, alt, size }) => {
  return <StyledImage src={url} alt={alt} size={size} />;
};

export default Image;
