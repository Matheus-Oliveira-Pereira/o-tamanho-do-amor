

interface HomeScreenProps {
   
}

export const HomeScreen: React.FC<HomeScreenProps> = (props: HomeScreenProps) => {
    return (
        <div >
            <div> 
                <p>
                    SINOPSE DO LIVRO
                </p>
                <p>
                    SINOPSE DO AUTOR
                </p>
                <p>
                    SINOPSE DO LANÇAMENTO
                </p>
            </div>
        </div>
    )
}