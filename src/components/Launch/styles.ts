import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 4rem 2rem;
  min-height: 65vh;
  
  @media (max-width: 800px) {
      min-height: 75vh;
  }
`

export const Title = styled.h1`
  font-size: 4rem;
  color: #62466F;

  @media (max-width: 472px) {
    font-size: 3rem;
  }
`

export const Text = styled.p`
  font-size: 3rem;
  color: #7B7A7A;
  font-weight: normal;

  
  @media (max-width: 472px) {
    font-size: 2rem;
  }
`

export const Bold = styled.strong`
  color: #7B7A7A;
  font-size: 2rem;
`

export const DateAndAddress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20rem;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 5rem;
    padding: 5rem 0;
  }
`