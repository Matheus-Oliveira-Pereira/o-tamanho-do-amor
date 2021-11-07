import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: row;  
    position : relative;
    height: 100vh;
    width: 100%;
    padding: 1.875rem;
    justify-content: space-around;
    padding: 20rem 40rem;
` 


export const Img = styled.img`
    height: 20rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const Divisor = styled.div`
    height: 45rem;
    width: 0.2rem;
    background-color: #E595CB;
`

export const SinopseContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 45rem;
`

export const Title = styled.h1`
    font-size: 3rem;
    color: #7B7A7A;
    text-transform: uppercase;
`
export const Text = styled.p`
    font-size: 1.6rem;
    color: #7B7A7A;
    text-transform: uppercase;
`
