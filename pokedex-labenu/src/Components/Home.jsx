import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPokedex } from './../Route/Coordinator';
import PokeCard from './PokeCard';
import {Container, Header, CardContainer, ControlButtons} from './../Styles/StyleHome'

function Home() {
    const navigate = useNavigate()

    return (
        <Container>
            <Header>
                <button onClick={() => goToPokedex(navigate)}>Ir para POKEDEX</button>
                <h1>Pokemons Disponíveis</h1>
            </Header>
            <CardContainer>
            {<PokeCard/>}
            {<PokeCard/>}
            {<PokeCard/>}
            {<PokeCard/>}
            {<PokeCard/>}
            {<PokeCard/>}
            {<PokeCard/>}
            {<PokeCard/>}
            {<PokeCard/>}
            {<PokeCard/>}
            </CardContainer>
            <ControlButtons>
                <button>Voltar</button>
                <button>Próxima</button>
            </ControlButtons>
        </Container>
    )
}

export default Home