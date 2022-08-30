import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DivPai } from './../Styles/Styled';
import { goToPokedex } from './../Route/Coordinator';
import PokeCard from './PokeCard';

function Home() {
    const navigate = useNavigate()

    return (
        <div>
            <DivPai>
                <button onClick={() => goToPokedex(navigate)}>Ir para POKEDEX</button>
                <h1>Pokemons Disponíveis</h1>
            </DivPai>
            {<PokeCard/>}
        </div>
    )
}

export default Home