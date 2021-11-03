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
    padding: 3rem;
`
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`

export const BgVideo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -2;
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
