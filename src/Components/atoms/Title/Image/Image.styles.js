import styled from 'styled-components';

export const StyledImage = styled.img`
  width: ${({ size }) => (size ? `${size[0]}rem` : '7rem')};
  height: ${({ size }) => (size ? (size[1] ? `${size[1]}rem` : 'auto') : '7rem')};
`;
