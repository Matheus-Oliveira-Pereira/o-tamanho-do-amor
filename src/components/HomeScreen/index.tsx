import {Home, Header, BgVideo, Video, Overlay, Content, Title} from './styles'
import VideoDeFundo from '../../assets/bg-video.mp4'

interface HomeScreenProps {
   
}

export const HomeScreen: React.FC<HomeScreenProps> = (props: HomeScreenProps) => {
    return (
        <Home >
            <BgVideo>
                <Overlay/>
                <Video autoPlay muted loop>
                    <source type="video/mp4" src={VideoDeFundo}/> 
                </Video>
            </BgVideo>

            <Header> 
                <p>
                    SINOPSE DO LIVRO
                </p>
                <p>
                    SINOPSE DO AUTOR
                </p>
                <p>
                    SINOPSE DO LANÇAMENTO
                </p>
            </Header>

            <Content>            
                <Title fontSize='5.192rem' >O tamanho</Title>
                <Title>Do amor</Title>

            </Content>


            
        </Home>
    )
}