import {Container,ContainerAuthorText, Text, Title, ImageWrapper} from './styles'
import Image from 'next/image'

interface AuthorScreenProps{


}

export const AuthorScreen: React.FC<AuthorScreenProps> = (props: AuthorScreenProps) => {

    return(
       <Container id="author">
           <ContainerAuthorText>
                <Title>décio sabbatini barbosa</Title>
                <Text>
                    Décio Sabbatini Barbosa nasceu em São Paulo capital, em 1962. Aos 19 anos, mudou-se para o
                    Norte do Paraná, em Londrina, onde formou-se como Farmacêutico-Bioquímico na 
                    Universidade Estadual de Londrina.
                    Estabeleceu-se  na cidade como professor
                    universitário. Fez muitas
                    amizades. casou-se e tem
                    uma filha. Embora já
                    tenha escrito alguns capítulos de livros e muitos artigos
                    científicos, sempre acalentou o sonho de escrever um romance. Somente em
                    2020, durante 
                    licença
                    médica em casa depois de
                    uma fratura no pé, conseguiu passar para o papel
                    essa trama. Novas histórias
                    virão, mas espera-se que,
                    para isso, o autor não precise quebrar o outro pé.
                </Text>
           </ContainerAuthorText>

           <ImageWrapper>
               <Image src='/author.png' alt='Author picture'  width={500} height={500} layout='responsive' objectFit='cover'/>
           </ImageWrapper>


       </Container>
    )

}