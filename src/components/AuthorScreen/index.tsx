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
                    Décio Sabbatini Barbosa nas&shy;ceu em São Paulo capi&shy;tal, em 1962. Aos 19 anos, mudou-se para o
                    Norte do Paraná, em Londri&shy;na, onde formou-se como Farma&shy;cêutico-Bioquí&shy;mico na 
                    Universida&shy;de Esta&shy;dual de Londri&shy;na.
                    Estabeleceu-se  na cida&shy;de como profes&shy;sor
                    universi&shy;tário. Fez muitas
                    amiza&shy;des, casou-se e tem
                    uma fi&shy;lha. Embora já
                    te&shy;nha escri&shy;to alguns capítu&shy;los de livros e muitos arti&shy;gos
                    científi&shy;cos, sem&shy;pre acalen&shy;tou o so&shy;nho de escre&shy;ver um roman&shy;ce. Somen&shy;te em
                    2020, duran&shy;te 
                    licença
                    médi&shy;ca em ca&shy;a depois de
                    uma fratu&shy;ra no pé, conse&shy;guiu pas&shy;sar para o pa&shy;pel
                    essa tra&shy;ma. Novas histó&shy;rias
                    vi&shy;rão, mas espera-se que,
                    para isso, o au&shy;tor não preci&shy;se que&shy;brar o ou&shy;tro pé.
                </Text>
           </ContainerAuthorText>

           <ImageWrapper>
               <Image src='/author.png' alt='Author picture'  width={500} height={500} layout='responsive' objectFit='cover'/>
           </ImageWrapper>


       </Container>
    )

}