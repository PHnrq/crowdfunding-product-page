import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;

        font-family: 'Commissioner', sans-serif;
        font-size: 62.5%;
    }

    :root {
        //Primary Colors
        --moderate-cyan: hsl(176, 50%, 47%);
        --dark-cyan: hsl(176, 72%, 28%);
        //Neutral Colors
        --black: hsl(0, 0%, 0%);
        --dark-gray: hsl(0, 0%, 48%);
    }

    body {
        font-size: 1.6rem;
    }
`