import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 10rem;
    gap: 20rem;
    min-height: 100vh;
    justify-content: center;
    align-items: center;

    @media (max-width: 1280px) {
      flex-direction: column;
      gap: 5rem;
      padding: 5rem 2rem;
    }
` 

export const Text = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
    color: #7B7A7A;
    font-size: 2.5rem;
    line-height: 3.6rem;
    text-align: justify;
    hyphens: auto;
    font-family: 'Roboto', sans-serif;
    hyphens: manual;

    @media (max-width: 900px) {
      font-size: 2.2rem;
      line-height: 3.4rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
      line-height: 3rem;
    }
`

export const Title = styled.h1`
    color: #7B7A7A;
    font-size: 5.5rem;
    line-height: 5.5rem;
    margin-bottom: 6rem;

    @media (max-width: 1600px) {
      font-size: 4.8rem;
      line-height: 4.8rem;
    }

    @media (max-width: 1170px) {
      font-size: 4.3rem;
      line-height: 4.3rem;
    }

    @media (max-width: 1280px) {
      margin-bottom: 3rem;
    }

    @media (max-width: 480px) {
      font-size: 3.5rem;
    }
`

export const TextsContainer = styled.div`
    max-width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1280px) {
      max-width: 80vw;
      align-items: center;
    }
`

export const ImageWrapper = styled.div`
    width: 23vw; 
    display: block;
    -webkit-box-shadow: 5px 5px 19px 5px rgba(0,0,0,0.22); 
    box-shadow: 5px 5px 19px 5px rgba(0,0,0,0.22);

    @media (max-width: 900px) {
      width: 40vw; 
    }
`