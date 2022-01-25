import styled from 'styled-components';

export const StyledMenuItem = styled.li`
  width: 3rem;
  height: 3rem;
  margin: 1rem;
  transition: transform 70ms ease-in-out;

  a {
    color: inherit;

    &:hover {
    }

    &:visited {
    }
  }

  svg {
    width: 3rem !important;
    height: 3rem;
  }

  &:hover {
    transform: scale(1.2);
  }
`;
