import { createGlobalStyle } from 'styled-components';
import { colors, typography, getSpace, getSpaceNumber } from './variables';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        text-decoration: none;
        outline-color:  none;
    }

    html, body, #root {
        height: 100%;
    }

    button {
        cursor: pointer;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
        text-rendering: optimizeLegibility !important;
        font-family: 'Montserrat', sans-serif;
        background-color: ${colors.white};
    }

    ul {
        list-style: none;
    }
`;

export const theme = {
    colors,
    font: typography,
    getSpace,
    getSpaceNumber,
};
