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
  CountdownWrapper 
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
          <Image alt="instagram logo" src="/instagram.png" width={28} height={28}/>
          <SmallText>@deciosabbatinibarbosa</SmallText>
        </SocialMedia>

        <SocialMedia onClick={() => window.open('https://www.facebook.com/AtritoArte/', '_blank')}>
          <Image alt="facebook logo" src="/facebook.png" width={28} height={28}/>
          <SmallText>facebook.com/AtritoArte</SmallText>
        </SocialMedia>
      </RowContainer>
    </Container>
  )
}

export default Launch;