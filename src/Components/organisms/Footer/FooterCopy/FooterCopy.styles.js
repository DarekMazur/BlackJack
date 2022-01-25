import styled from 'styled-components';

export const FooterCopy = styled.div`
  padding: 3rem 0;
  margin-right: 2rem;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.lm};
  font-family: ${({ theme }) => theme.fonts.headerFont};
`;
