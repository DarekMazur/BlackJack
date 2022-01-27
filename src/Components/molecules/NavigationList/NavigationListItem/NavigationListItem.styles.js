import styled from 'styled-components';
import { StyledMenuItem } from '../../Menu/MenuItem/MenuItem.styles';
import token from '../../../../assets/token.png';

export const StyledNavigationListItem = styled(StyledMenuItem)`
  width: 100%;
  display: flex;
  align-items: center;

  &:hover {
    transform: scale(1);
  }

  &::before {
    content: '';
    display: inline-block;
    background-image: url(${token});
    background-size: 3rem 3rem;
    margin-right: 1rem;
    height: 3rem;
    width: 3rem;
    transition: transform 500ms ease-in-out;
  }

  &:hover::before {
    transform: rotateY(180deg);
  }
`;
