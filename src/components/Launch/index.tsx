import React from 'react';

import FlipCountdown from '@rumess/react-flip-countdown';
 
import { Container, DateAndAddress, Title, Text, Bold } from './styles';

const Launch: React.FC = () => {
  return (
    <Container>
      <Title>LANÇAMENTO</Title>
      <DateAndAddress>
        <div>
          <Bold>Quando?</Bold>
          <Text> 16 DE NOVEMBRO DE 2021  às 19H</Text>
        </div>

        <div>
          <Bold>Onde?</Bold>
          <Text>RUA SERGIPE, 52 - SESC CADEIÃO</Text>
        </div>
      </DateAndAddress>
      <FlipCountdown
          dayTitle='Dias'
          hourTitle='Horas'
          minuteTitle='Minutos'
          secondTitle='Segundos'
          hideYear
          hideMonth
          endAt={'2021-11-16 19:00:00'}
        />
    </Container>
  )
}

export default Launch;