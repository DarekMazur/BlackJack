import styled from 'styled-components';

export const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: ${({ theme }) => theme.fonts.headerFont};
  text-align: center;
  padding: 4rem;
`;
