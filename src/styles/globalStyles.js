import { createGlobalStyle } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400&family=Sancreek&display=swap');

  html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    *, *::after, *::before {
        box-sizing: inherit;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.mainFont};
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSize.m};
        line-height: 2;
        background-color: ${({ theme }) => theme.colors.green};
    }
`;
