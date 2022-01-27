import styled from 'styled-components';
import { StyledMenu } from '../Menu/Menu.styles';

export const StyledNavigationList = styled(StyledMenu)`
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
  font-family: ${({ theme }) => theme.fonts.headerFont};
`;
