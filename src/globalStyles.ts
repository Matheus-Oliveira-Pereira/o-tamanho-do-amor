import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Intro';
        src: url("/fonts/Intro/Intro-Regular.otf");
        font-style: normal;
        font-weight: normal;
    }
    @font-face {
          font-family: 'GeometricaSans';
          src: url("/fonts/GeometricaSans/GeometricaSans-Regular.ttf");
          font-style: normal;
          font-weight: normal;
    }
    @font-face {
          font-family: 'GeometricaSans';
          src: url("/fonts/GeometricaSans/GeometricaSans-Light.ttf");
          font-style: normal;
          font-weight: normal;
    }
   
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
        font-size: 1.6rem;
        box-sizing: border-box; 
        font-family: "GeometricaSans";
    }

`;
 
export default GlobalStyle;