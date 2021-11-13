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
          <Text>
            O que seria uma sim&shy;ples excursão de estudan&shy;tes londrinen&shy;ses para um museu na cida&shy;de de São Pau&shy;lo 
            torna-se, na verda&shy;de, um emaranha&shy;do de diferen&shy;tes acontecimen&shy;tos. Adolescen&shy;tes e adul&shy;tos expõem 
            particularida&shy;des de suas famí&shy;lias, amiza&shy;des, paque&shy;ras e, claro, surgem dis&shy;cussões. Mui&shy;tas dis&shy;cussões. 
            Sur&shy;presas ocor&shy;rem ao lon&shy;go da via&shy;gem e de&shy;pois, muitas ou&shy;tras tam&shy;bém. Mas afi&shy;nal, o que seria o miste&shy;rioso 
            Do&shy;mo Mági&shy;co? Como uma criança autis&shy;ta po&shy;deria ser o mo&shy;tivo princi&shy;pal de uma gran&shy;de revo&shy;lução tecnológi&shy;ca?
          </Text>
        </TextsContainer>
      </Container>
    )
}