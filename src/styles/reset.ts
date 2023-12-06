import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    body {
        height: 100vh;
        width: 100%;

        display: flex;
        flex-direction: column;

        background-color: var(--color--grey-3);
    }

    button {
        cursor: pointer;
        background-color: transparent;
        border: none;
    }

    ul, ol {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    input {
        border: none;
        background: transparent;
        outline: none;
        box-shadow: none;
    }

    .noStyle {
        text-decoration: none;
        color: inherit;
        background-color: transparent;
    }
`