import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10rem;
    min-height: 100vh;
    width: 100%;
    background-color: #210720;
    gap: 15rem;

    @media (max-width: 1280px) {
      flex-direction: column-reverse;
      gap: 4rem;
      padding: 5rem 2rem;
      justify-content: center;
      align-items: center;
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

    @media (max-width: 650px) {
        font-size: 2.5rem;
    } 
`

export const Text = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
    font-size: 2.5rem;
    line-height: 3.6rem;
    color: #F3F3F3;
    text-align: justify;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 650px) {
      font-size: 2.2rem;
      line-height: 3.4rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
      line-height: 3rem;
    }
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

    @media (max-width: 1280px) {
        margin-left: 80px;
    }

    @media (max-width: 650px) {
        height: 50vw;
        width: 50vw;
    }
`

