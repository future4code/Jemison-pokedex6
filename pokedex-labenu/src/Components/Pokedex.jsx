import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome } from './../Route/Coordinator';
import CardPokedex from './CardPokedex';
import { DivPai, Bar, CardsHome } from '../Styles/StyleDetails'
import GlobalContext from './../Context/GlobalContext';

function Pokedex() {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    const cards = context.pokedex.map((pokeElement, index) => {
        return (
            <CardPokedex key={index} pokeElement={pokeElement} />
        )
    })

    return (
        <DivPai>
            <Bar>
                <button onClick={() => goToHome(navigate)}>Voltar para home</button>
                <h1>Pokedex</h1>
            </Bar>
            <CardsHome>
                {cards}
            </CardsHome>
        </DivPai>
    )
}

export default Pokedex