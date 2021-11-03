import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *,
    *::before,
    *::after {                 /*universal selector*/
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    }

    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    body { 
        font-family: "lato", sans-serif;
        font-weight: 400;
        line-height: 1.7; 
        font-size: 1.6rem;
        box-sizing: border-box; 
    }
`;
 
export default GlobalStyle;