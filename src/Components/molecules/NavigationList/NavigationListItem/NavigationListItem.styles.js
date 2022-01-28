import styled, { keyframes } from 'styled-components';
import { StyledMenuItem } from '../../Menu/MenuItem/MenuItem.styles';
import token from '../../../../assets/images/token.png';

const rotate = keyframes`
  0% {
    transform: rotateY(10);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

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
  }

  &:hover::before {
    animation: 1s ${rotate} linear infinite;
  }
`;
