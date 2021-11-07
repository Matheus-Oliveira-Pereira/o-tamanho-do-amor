import {Container,Img, Divisor, SinopseContainer, Title, Text} from './styles'

interface SinopseProps {
   
}

export const Sinopse: React.FC<SinopseProps> = (props: SinopseProps) => {
    return (
             
        <Container >
 
            <Img  src='../../assets/capa.jfif'/>
            <Divisor></Divisor>
            <SinopseContainer>
                <Title>SINOPSE</Title>
                <Text>O que seria uma simples excursão de estudantes londrinenses para um museu na cidade de São Paulo torna-se, na verdade. um emaranhado de diferen- tes acontecimentos. Adolescentes e adultos expõem particularidades de suas famílias, amizades, paqueras e, claro, surgem discussões. Muitas discussões. Surpresas ocorrem ao longo da viagem e depois, muitas outras também. Mas afinal, o que seria o misterioso Domo Mágico? Como uma criança autista poderia ser o motivo principal de grande revolução tecnológica?</Text>
            </SinopseContainer>
    
        </Container>
        
    )
}