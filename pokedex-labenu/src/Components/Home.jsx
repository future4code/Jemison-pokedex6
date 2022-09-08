import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPokedex } from './../Route/Coordinator';
import { DivPai, CardsHome, BarHome, ButtonsHome, BarLogos } from '../Styles/StyleDetails'
import GlobalContext from './../Context/GlobalContext';
import PokeCard from './PokeCard';
import logo from '../Styles/img/PokeLogo.png'
import pokedexLogo from '../Styles/img/Pokedex_logo.png'
import axios from 'axios';
import { DivPai, CardsHome, Bar, ButtonsHome } from '../Styles/StyleDetails'


function Home() {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()
    
    const [Pokedex, SetPokedex] = useState([])
    const [listPokemons, setListPokemons] = useState([])
    const [nextPage, setNextPage] = useState("")
    const [previousPage, setPreviousPage] = useState("")
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
    const getListPokemons = () => {
        axios.get(currentPage)
            .then((res) => {
                setListPokemons(res.data.results)
                setNextPage(res.data.next)
                setPreviousPage(res.data.previous)
            })
            .catch((error) => console.log(error.message))
    }

    useEffect(() => {
        console.log(Pokedex)
    }, [Pokedex])

    const goToNext = () => {
        setCurrentPage(nextPage)
        return currentPage
    }
    const goToPrevious = () => {
        setCurrentPage(previousPage)
        return currentPage
    }

    const addPokemonPokedex = (pokemon) => {
        SetPokedex([...Pokedex, pokemon])
        const newList = listPokemons.filter(function(poke) { return pokemon.name != poke.name; });
        setListPokemons(newList)
    }

    const pokemons = [...listPokemons]
    const pokemon = pokemons.map((i) => {
        return (
            <PokeCard addPokemonToPokedex={addPokemonPokedex} nomePokemon={i.name} key={i.name} url={i.url} />
        )
    })
    useEffect(() => {
        getListPokemons()
    }, [currentPage])
    return (
        <DivPai>
            <BarHome>
                <BarLogos>
                    <img src={logo} alt="pokemon_logo" />
                    <img id="dex" onClick={() => goToPokedex(navigate)} src={pokedexLogo} alt="pokedex_logo" />
                </BarLogos>
            </BarHome>
            <CardsHome>
                {pokemon}
            </CardsHome>
            <ButtonsHome>
                <button onClick={() => { goToPrevious() }}>Previous</button>
                <button onClick={() => { goToNext() }}>Next Page</button>
            </ButtonsHome>
        </DivPai>
    )
}
export default Home;