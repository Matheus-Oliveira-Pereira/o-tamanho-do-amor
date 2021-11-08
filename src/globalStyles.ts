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
        background-color: #FCF9F9;
    }

    
      /* width */
    ::-webkit-scrollbar {
        width: 8px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: #2b2b2b;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.79);
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: rgb(189, 189, 189);
    }
    
    @media only screen and (max-width : 1180px) {
      /* width */
      ::-webkit-scrollbar {
          display: none;
      }
      /* Track */
      ::-webkit-scrollbar-track {
          display: none;
      }
      /* Handle */
      ::-webkit-scrollbar-thumb {
          display: none;
      }
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
          display: none;
      }
  }

`;
 
export default GlobalStyle;