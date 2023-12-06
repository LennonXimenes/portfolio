import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-white: #FFFFFF;
        --color-black: #0A0A0B;
        
        --color-primary: #623CEA;
        --color--primary-focus: #311E75;
        --color--primary-hover: #322E90;
        --color-secundaty: #FF577F;
        
        --color--grey-1: #868E96;
        --color--grey-2: #343B41;
        --color--grey-3: #121214;
        
        --color--negative: #E83F5B;
        --color--warning: #FFCD07;
        --color--sucess: #3FE864;
        --color--information: #155BCB;

        --font-primary: "Inter" sans-serif;
    }

`