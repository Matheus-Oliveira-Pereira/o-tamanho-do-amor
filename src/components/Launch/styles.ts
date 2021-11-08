import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 0 0 0;
  min-height: 70vh;
  
  @media (max-width: 800px) {
      min-height: 75vh;
  }
`

export const Title = styled.strong`
  font-size: 4rem;
  color: #62466F;
  padding: 2rem 0;

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

export const SmallText = styled(Text)`
  font-size: 2rem;

  @media (max-width: 472px) {
    font-size: 1.7rem;
  }
  
`

export const Bold = styled.strong`
  color: #7B7A7A;
  font-size: 2rem;
`

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20rem;
  padding: 2rem 0;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 3rem;
    padding: 5rem 0;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  gap: 1rem;
  cursor: pointer;

  @media (max-width: 1100px) {
    padding-top: 0;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CountdownWrapper = styled.div`
  padding-top: 5rem;

  @media (max-width: 1100px) {
    padding-top: 3rem;
  }
`

export const Credits = styled.div`
  background-color: #373737;
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`

export const CreditContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 4rem;
  gap: 1rem;

  @media (max-width: 1100px) {
    padding-left: 0;
  }
`

export const CreditsText = styled.p`
  color: #fff;
  font-size: 2rem;
`