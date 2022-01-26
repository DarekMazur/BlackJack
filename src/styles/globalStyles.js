import { createGlobalStyle } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

export const GlobalStyle = createGlobalStyle`
  html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    *, *::after, *::before {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.fonts.mainFont};
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSize.m};
        line-height: 2;
        background-color: ${({ theme }) => theme.colors.green};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${({ theme }) => theme.fonts.headerFont};
    }
`;
