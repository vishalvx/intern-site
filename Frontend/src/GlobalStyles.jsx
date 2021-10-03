import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root{
    /* Font */
    --fontSuperBig:2.5rem;
    --fontBig:2rem;
    --fontMed:1.5rem;
    --fontSmall:1.0rem;
    --fontSuperSmall:0.7rem;
    
    /* Color */
    --black: #171717;
    --darkGray:#2b2b2b;
    --medGray:#B2B1B9;
    --lightGray:#EDEDED;
    --white:#FFFFFF;
    --blueGreen: #57CC99;

    /* var assignment */
    --backgroundColor:var(--lightGray);
    --headerColor:var(--blueGreen);
    --footerColor:var(--darkGray);
    /* diff view */
    --mobileView:400px;
    --tabView:768px
      /* shadow */
      --level3: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      --level1: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      --level2:rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        background-color: var(--backgroundColor);
        position: relative;
        font-family: 'Lato', sans-serif;
    }
    
    h1{
        font-size: var(--fontSuperBig);
        font-family: 'Glory', sans-serif;

    }
    h2,h3{
        font-size: var(--fontBig);
    }
    h4,h5{
        font-size: var(--fontMed);
    }
    h6,p,li,a{
        font-size: var(--fontSmall);
    }

    @media only screen and (max-width: 500px) {
       *{
           font-size: 70%;
       }
  }

`;
