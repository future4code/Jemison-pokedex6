import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPokedex } from './../Route/Coordinator';
import PokeCard from './PokeCard';
import {Container, Header, CardContainer, ControlButtons} from './../Styles/StyleHome'
import useRequestData from './../Constants/useRequestData'
import { BASE_URL } from '../Constants/Url';

function Home() {
    const navigate = useNavigate()
    const data = useRequestData(`${BASE_URL}pokemon`)

    return (
        <Container>
            <Header>
                <button onClick={() => goToPokedex(navigate)}>Ir para POKEDEX</button>
                <h1>Pokemons Disponíveis</h1>
            </Header>
            <CardContainer>
            {data && data.results.map((pokemon)=>{
                return<PokeCard key={pokemon.name} pokemon={pokemon}/>
            })}
            </CardContainer>
            <ControlButtons>
                <button>Voltar</button>
                <button>Próxima</button>
            </ControlButtons>
        </Container>
    )
}

export default Home