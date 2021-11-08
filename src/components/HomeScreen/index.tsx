import { 
    Home, 
    Header, 
    BgVideo, 
    Video, 
    Overlay, 
    Content, 
    TitleUp,
    TitleDown, 
    Subtitle, 
    Button, 
    MenuIten,
    ButtonText,
  } from './styles'
import VideoDeFundo from '../../assets/galaxy-video.mp4'

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
            
             <Home>
                <Header> 
                    <MenuIten href="#synopsis">sinopse</MenuIten>
                    <MenuIten href="#author">autor</MenuIten>
                    <MenuIten href="#launch">lançamento</MenuIten>
                </Header>

                <Content>            
                    <TitleUp>O tamanho</TitleUp>
                    <TitleDown>Do amor</TitleDown>
                    <Subtitle>DÉCIO SABBATINI BARBOSA</Subtitle>
                    <Button href="#synopsis"><ButtonText>CONHECER</ButtonText></Button>
                </Content>

               <div/>
            </Home>
        </div>
    )
}