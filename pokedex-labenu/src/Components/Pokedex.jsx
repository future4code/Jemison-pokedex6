import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome } from './../Route/Coordinator';
import CardPokedex from './CardPokedex';
import { DivPai, BarPokedex, CardsHome, BarLogosPokedex, NoPokemons } from '../Styles/StyleDetails'
import { PokedexVazia } from '../Styles/StylesNovo'
import GlobalContext from './../Context/GlobalContext';
import logo from '../Styles/img/PokeLogo.png'
import pokedexLogo from '../Styles/img/Pokedex_logo.png'


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
            <CardPokedex key={index} pokeElement={pokeElement} removePokemon={removePokemon} />
        )
    })

    console.log(context.pokedex)

    if (context.pokedex.length === 0) {
        return (
            <DivPai>
                <BarPokedex>
                    <BarLogosPokedex>
                        <img onClick={() => goToHome(navigate)} src={logo} alt="pokemon_logo" />
                        <img id="dex" src={pokedexLogo} alt="pokedex_logo" />
                    </BarLogosPokedex>
                </BarPokedex>
                <PokedexVazia>
                    <NoPokemons>
                        <span>Sem Pokemons</span>
                    </NoPokemons>
                </PokedexVazia>
            </DivPai>
        )
    } else {
        return (
            <DivPai>
                <BarPokedex>
                    <BarLogosPokedex>
                        <img onClick={() => goToHome(navigate)} src={logo} alt="pokemon_logo" />
                        <img id="dex" src={pokedexLogo} alt="pokedex_logo" />
                    </BarLogosPokedex>
                </BarPokedex>
                <CardsHome>
                    {cards}
                </CardsHome>
            </DivPai>
        )
    }
}

export default Pokedex