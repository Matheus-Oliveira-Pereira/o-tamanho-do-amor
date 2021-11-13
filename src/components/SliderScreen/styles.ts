import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`
export const Title = styled.h1`
    color: #7B7A7A;
    font-size: 5.5rem;
    line-height: 5.5rem;
    margin-bottom: 6rem;
    letter-spacing: 0.5rem;

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

// export const SliderImg = styled.div<SliderImgeProps>`
//   background-image: url(${({numero}) => `/Arte0${numero}.jpg`});
//   background-size: contain ;
//   background-position: top;
//   background-repeat: no-repeat;
//   height: 70vh;
// `