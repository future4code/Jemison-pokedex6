import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome } from './../Route/Coordinator';
import CardPokedex from './CardPokedex';
import { DivPai, Bar, CardsHome } from '../Styles/StyleDetails'
import GlobalContext from './../Context/GlobalContext';

function Pokedex() {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem('cartt', JSON.stringify(context.pokedex))
        console.count("renderizou")
    }, [context.pokedex])

    const removePokemon = (pokemonToRemove) => {
        const novaPokedex = [...context.pokedex]
        const indexClickedPokemon = novaPokedex.indexOf(pokemonToRemove)
        novaPokedex.splice(indexClickedPokemon, 1)
        context.setPokedex(novaPokedex)        
    }

    const cards = context.pokedex.map((pokeElement, index) => {
        return (
            <CardPokedex key={index} pokeElement={pokeElement} removePokemon={removePokemon}  />
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