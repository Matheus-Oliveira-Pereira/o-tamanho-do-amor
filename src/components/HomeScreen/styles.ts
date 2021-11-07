import styled from 'styled-components'

interface TitleProps {
    fontSize?: string,
    letterSpacing?: string,
}

export const Home = styled.div`
    display: flex;
    flex-direction: column;  
    position : relative;
    height: 100vh;
    width: 100%;
    padding: 1.875rem;
`
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`
export const MenuIten = styled.a`
    color: #fff;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.51rem;    
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
    height: 100%;
    width: 100%;

`

export const Title = styled.h1<TitleProps>`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap');
    color: #e595cb;
    font-size: ${({fontSize}) => fontSize || '6.7rem'};
    letter-spacing: -0.1rem;
    font-family: 'Rubik', sans-serif;
    text-transform: uppercase;
    font-weight: 300;

`
export const Sublititle = styled.h2`
    text-transform: uppercase;
    color: #fff;
`

export const Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15rem;
    
    
    position: relative;
    padding: 0.75rem 2rem;

    text-decoration: none;

    border-radius: 10rem;
    border: none;
    background: #fff;

    
    
    cursor: pointer;
    transition: all 0.2s;
    animation: moveInBotton 1s ease-out 0.75s; /* 0.75 seg é um delay*/
    animation-fill-mode: backwards; /* isso faz com que o objeto fique atras até o o momento da animação*/

    &:hover {
        transform: translateY(-3px);
        /*o eixo y se move para baixo, então para subir tem que ser numero negativo */
        box-shadow: 0 1rem 2rem rgba($color-black, 0.2);
    

        &::after {
        transform: scaleX(1.4) scaleY(1.6); /* aumenta no eixo x*/
        opacity: 0;
        }
    }   

    &:active,
    &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 0.5rem 1rem rgba($color-black, 0.2);
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
        position: absolute;
    }
`
export const ButtonText = styled.span`
    text-transform: uppercase;
   
    color: #E595CB;
    font-weight: bold;
    font-size: 1.3rem;
    line-height: 1.8rem;
    letter-spacing: -5%;
   

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