import styled from 'styled-components';

export const StyledFooter = styled.footer`
  margin-top: 3rem;
  padding: 3rem 0;
  border-top: ${({ theme }) => `0.5rem solid ${theme.colors.white}`};
  background-color: ${({ theme }) => theme.colors.dark};
`;
