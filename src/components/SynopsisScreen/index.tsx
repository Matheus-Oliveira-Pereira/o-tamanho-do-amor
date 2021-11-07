import Image from 'next/image'

import { Container, Title, Text, TextsContainer, ImageWrapper } from './styles'

export const Synopsis: React.FC = () => {
    return (
      <Container id="synopsis">
        <ImageWrapper>
          <Image src="/capa.jpg" alt="Book Cover" width={421} height={556} layout="responsive"/>
        </ImageWrapper>
        <TextsContainer>
          <Title>SINOPSE</Title>
          <Text>O que seria uma simples excursão de estudantes londrinenses para um museu na cidade de São Paulo 
            torna-se, na verdade. um emaranhado de diferen- tes acontecimentos. Adolescentes e adultos expõem 
            particularidades de suas famílias, amizades, paqueras e, claro, surgem discussões. Muitas discussões. 
            Surpresas ocorrem ao longo da viagem e depois, muitas outras também. Mas afinal, o que seria o misterioso 
            Domo Mágico? Como uma criança autista poderia ser o motivo principal de grande revolução tecnológica?
          </Text>
        </TextsContainer>
      </Container>
    )
}