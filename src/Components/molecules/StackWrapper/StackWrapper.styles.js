import styled from 'styled-components';

export const StackWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem;

  img {
    margin: 0 2rem;
  }
`;

export const Tokens = styled.div`
  position: relative;
  width: 11rem;
  height: 11.5rem;
  margin: 0 4rem;

  img {
    position: absolute;

    &:nth-of-type(2) {
      left: 1rem;
      top: 1.5rem;
    }
  }
`;
