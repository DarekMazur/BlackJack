import styled from 'styled-components';

export const StyledHome = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: calc(100% + 6rem);
  min-height: 60vh;
  margin-left: -3rem;
  margin-bottom: -3rem;
  color: ${({ theme }) => theme.colors.white};
  padding: 3rem;
  border-top: ${({ theme }) => `0.5rem solid ${theme.colors.white}`};

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::before {
    background: ${({ background }) => `url(${background}) no-repeat center/cover`};
    z-index: -2;
  }

  &::after {
    background-color: ${({ theme }) => theme.colors.darkYellow};
    opacity: 0.9;
    z-index: -1;
  }
`;
