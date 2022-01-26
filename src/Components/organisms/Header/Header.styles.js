import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
  border-bottom: ${({ theme }) => `0.5rem solid ${theme.colors.white}`};
`;
