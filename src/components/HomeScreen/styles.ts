import styled from 'styled-components'

export const Home = styled.div`
    display: flex;
    flex-direction: column;  
    align-items: center;
    justify-content: space-between;
    position : relative;
    height: 100vh;
    width: 100%;
    padding: 4rem;

    @media (max-width: 767px) {
      padding: 2rem;
    }
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`

export const MenuIten = styled.a`

    &,
    &:link,
    &:visited {

        font-family: "GeometricaSans";
        font-weight: 100;
        color: #fff;
        text-transform: uppercase;
        font-size: 2rem;    
        letter-spacing: 0.1rem;
        cursor: pointer;
        transition: all 0.2s;
        background-color: transparent;
        text-decoration: none;

        &:hover {

            transform: translateY(-4px);        

            &::after {
            transform: scaleX(1.4) scaleY(1.6); /* aumenta no eixo x*/
            opacity: 0;
            }
        }  
        
        
        &:active,
        &:focus {
            outline: none;
            transform: translateY(-1px);
        }
    }

    @media (max-width: 767px) {
      &,
      &:link,
      &:visited {
        font-size: 1.3rem;
      }

    }
`

export const BgVideo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -5;
    overflow: hidden;
`

export const Video = styled.video`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

export const Overlay = styled.div`
    background: rgba(68,0,45,0.41);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    overflow: hidden;
    
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const TitleUp = styled.h1`
    color: #e595cb;
    text-transform: uppercase;
    font-weight: 200;
    letter-spacing: 0.6rem;
    font-size: 10rem;
    line-height: 8rem;

    @media (max-width: 767px) {
      font-size: 4.9rem;
      line-height: 6rem;
    }

    @media (max-width: 358px) {
      font-size: 3.1rem;
      line-height: 4rem;
    }
`

export const TitleDown = styled.h1`
    color: #e595cb;
    text-transform: uppercase;
    font-weight: 200;
    letter-spacing: 0.6rem;
    font-size: 12rem;
    line-height: 10rem;

    @media (max-width: 767px) {
      font-size: 6rem;
      line-height: 4rem;
    }

    @media (max-width: 358px) {
      font-size: 4rem;
      line-height: 2rem;
    }
`

export const Subtitle = styled.h2`
    margin-top: 2rem;
    font-family: "Intro";
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 0.2rem;

    @media (max-width: 767px) {
      font-size: 1.2rem;
    }

    @media (max-width: 358px) {
      font-size: 1.1rem;
    }
`

export const Button = styled.a`

    position: absolute;
    bottom: 10%;

    &,
    &:link,
    &:visited {

        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 0.75rem 2rem;
        text-decoration: none;
        border-radius: 10rem;
        border: none;
        background: #fff;
        cursor: pointer;
        transition: all 0.2s;
        animation: moveInBotton 1s ease-out 0.75s; 
        animation-fill-mode: backwards;

        &:hover {

            transform: translateY(-4px);
            /*o eixo y se move para baixo, então para subir tem que ser numero negativo */
            box-shadow: 0 1rem 2rem rgba(0,0,0, 0.2);
        

            &::after {
            transform: scaleX(1.4) scaleY(1.6); /* aumenta no eixo x*/
            opacity: 0;
            }
        }   

        &:active,
        &:focus {
            outline: none;
            transform: translateY(-1px);
            box-shadow: 0 0.5rem 1rem rgba(0, 0 , 0 , 0.2);
        }

        &::after {
            content: "";
            display: inline-block;
            height: 100%;
            width: 100%;
            border-radius: 10rem;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -3; /* define em qual camada vai estar, como esta negativo sera enviado para tras*/
            transition: all 0.4s;
            background: #fff;

        }


        @keyframes moveInBotton {
            0% {
                opacity: 0; /*opacidade em 0 pra começar invisivel*/
                transform: translateY(3rem); /*translatex para animar no eixo x*/
            }

            100% {
                opacity: 1; /*opacidade em 1 para ficar visivel*/
                transform: translate(0); /*tralate 0 para imagem ficar na posição normal*/
            }
        }
    }


`
export const ButtonText = styled.span`
    font-family: "Intro";
    text-transform: uppercase;
    color: #E595CB;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.8rem;
    
   

    &:link,
    &:visited {
        font-size: 1.3rem;
        color: #E595CB;
        display: inline-block;
        text-decoration: none;
        border-bottom: 0.1rem solid #E595CB;
        padding: 0.3rem;
        transition: all 0.2s;
    } 


`