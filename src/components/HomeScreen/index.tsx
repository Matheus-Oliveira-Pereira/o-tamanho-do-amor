import {Home, Header, BgVideo, Video, Overlay, Content, Title, Sublititle, Button, MenuIten,ButtonText} from './styles'
import VideoDeFundo from '../../assets/bg-video.mp4'

interface HomeScreenProps {
   
}

export const HomeScreen: React.FC<HomeScreenProps> = (props: HomeScreenProps) => {
    return (
        <div>

            <BgVideo>
                <Overlay/>
                <Video autoPlay muted loop>
                    <source type="video/mp4" src={VideoDeFundo}/> 
                </Video>
            </BgVideo>
            
             <Home >

                <Header> 
                    <MenuIten>sinopse do livro</MenuIten>
                    <MenuIten>sobre o autor</MenuIten>
                    <MenuIten>lançamento</MenuIten>
                </Header>

                <Content>            
                    <Title fontSize='9.67rem' fontLineHeight='8rem' >O tamanho</Title>
                    <Title>Do amor</Title>
                    <Sublititle>DÉCIO SABBATINI BARBOSA</Sublititle>
                    <Button  > <ButtonText> CONHECER</ButtonText> </Button>
                </Content>
       
            </Home>
        </div>
    )
}