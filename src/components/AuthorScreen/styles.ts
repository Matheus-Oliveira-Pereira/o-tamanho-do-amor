import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #210720;
    gap: 15rem;

    @media (max-width: 1280px) {
      flex-direction: column;
      gap: 10rem;
      padding: 2rem;
    }
;
`

export const ContainerAuthorText = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 40vw;
    justify-content: space-between;
    gap: 4rem;

    @media (max-width: 1280px) {
        max-width: 80vw;
    }
`

export const Title = styled.h1`
    font-family: "Intro";
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 0.2rem;
   
    
`

export const Text = styled.p`
    font-size: 2.5rem;
    color: #F3F3F3;
    text-align: justify;

` 

export const ImageWrapper = styled.div`

    position: relative;
    height: 40rem;
    width: 40rem;
    border-radius: 50%;
    overflow: hidden;
    transform: translateX(-4rem) scale(1);
    transition: all 0.5s;
    backface-visibility: hidden;
`

