import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPokedex } from './../Route/Coordinator';
import PokeCard from './PokeCard';
import axios from 'axios';
import GlobalContext from './../Context/GlobalContext';
import { DivPai, CardsHome, Bar, ButtonsHome } from '../Styles/StyleDetails'

function Home() {
    const context = useContext(GlobalContext)   
    const navigate = useNavigate()
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

    const goToNext = () => {
        setCurrentPage(nextPage)
        return currentPage
    }
    const goToPrevious = () => {
        setCurrentPage(previousPage)
        return currentPage
    }

    const addPokemonPokedex = (pokemon) => {
        context.setPokedex([...context.pokedex, pokemon])
        // const newList = listPokemons.filter(function(poke) { return pokemon.name != poke.name; });
        // setListPokemons(newList)
    }

    const spreadListPokemons = [...listPokemons]
    const pokemons = spreadListPokemons.map((i) => {
        return (
            <PokeCard addPokemonToPokedex={addPokemonPokedex} nomePokemon={i.name} key={i.name} url={i.url} />
        )
    })


    useEffect(() => {
        getListPokemons()
    }, [currentPage])

    return (
        <DivPai>
            <Bar>
                <h1>Home</h1>
                <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
            </Bar>
            <CardsHome>
                {pokemons}
            </CardsHome>
            <ButtonsHome>
                <button onClick={() => { goToPrevious() }}>Previous</button>
                <button onClick={() => { goToNext() }}>Next Page</button>
            </ButtonsHome>
        </DivPai>
    )

}

export default Home