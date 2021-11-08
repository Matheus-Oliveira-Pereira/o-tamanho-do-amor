import React from 'react';

import Image from 'next/image';
import FlipCountdown from '@rumess/react-flip-countdown';
 
import { 
  Container, 
  RowContainer, 
  Title, 
  Text, 
  Bold, 
  SocialMedia, 
  SmallText, 
  Content, 
  CountdownWrapper,
  Credits,
  CreditsText,
  CreditContainer
} from './styles';

const Launch: React.FC = () => {
  return (
    <Container id="launch">
      <Content>
        <Title>LANÇAMENTO</Title>
        <RowContainer>
          <div>
            <Bold>Quando?</Bold>
            <Text> 16 DE NOVEMBRO DE 2021  às 19H</Text>
          </div>

          <div>
            <Bold>Onde?</Bold>
            <Text>RUA SERGIPE, 52 - SESC CADEIÃO</Text>
          </div>
        </RowContainer>
        <CountdownWrapper>
          <FlipCountdown
            dayTitle='Dias'
            hourTitle='Horas'
            minuteTitle='Minutos'
            secondTitle='Segundos'
            hideYear
            hideMonth
            endAt={'2021-11-16 19:00:00'}
          />
        </CountdownWrapper>
      </Content>

      <RowContainer>
        <SocialMedia onClick={() => window.open('https://www.instagram.com/deciosabbatinibarbosa/', '_blank')}>
          <Image alt="instagram logo" src="/instagram.png" width={26} height={26}/>
          <SmallText>@deciosabbatinibarbosa</SmallText>
        </SocialMedia>

        <SocialMedia onClick={() => window.open('https://www.facebook.com/AtritoArte/', '_blank')}>
          <Image alt="facebook logo" src="/facebook.png" width={26} height={26}/>
          <SmallText>facebook.com/AtritoArte</SmallText>
        </SocialMedia>
      </RowContainer>
      <Credits>
        <CreditsText>Este site foi desenvolvido por</CreditsText>
        <CreditContainer>
          <Image alt="Beatriz Schwartz" src="/Beatriz.png" width={30} height={30}/>
          <CreditsText>Beatriz Schwartz</CreditsText>
          <Image 
            alt="Github da Beatriz" 
            src="/github.png" 
            width={28} 
            height={28} 
            onClick={() => window.open('https://github.com/beatrizsabbatini', '_blank')}
          />
          <Image 
            alt="Linkedin da Beatriz" 
            src="/linkedin.png" 
            width={26} 
            height={26}
            onClick={() => window.open('https://www.linkedin.com/in/beatriz-schwartz/', '_blank')}
          />
        </CreditContainer>
        <CreditContainer>
          <Image alt="Matheus Oliveira"  src="/Matheus.png" width={30} height={30} />
          <CreditsText>Matheus Oliveira</CreditsText>
          <Image 
            alt="Github do Matheus" 
            src="/github.png" 
            width={30} 
            height={30} 
            onClick={() => window.open('https://github.com/Matheus-Oliveira-Pereira', '_blank')}
          />
          <Image 
            alt="Linkedin do Matheus" 
            src="/linkedin.png" 
            width={26} 
            height={26}
            onClick={() => window.open('https://www.linkedin.com/in/matheus-oliveira-pereira/', '_blank')}
          />
        </CreditContainer>
      </Credits>
    </Container>
  )
}

export default Launch;