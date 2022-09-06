import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPokedex } from './../Route/Coordinator';
import PokeCard from './PokeCard';
import axios from 'axios';
// import { Container, CardsHome, Header } from '../Styles/StyleDetails'
import { DivPai, CardsHome, Bar, ButtonsHome } from '../Styles/StyleDetails'

function Home() {

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

    console.log(listPokemons)

    const goToNext = () => {
        setCurrentPage(nextPage)
        return currentPage
    }
    const goToPrevious = () => {
        setCurrentPage(previousPage)
        return currentPage
    }

    const teste = [...listPokemons]
    const bla = teste.map((i, key) => {
        return (
            <PokeCard nomePokemon={i.name} key={i.name} url={i.url} />
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
                {bla}
            </CardsHome>
            <ButtonsHome>
                <button onClick={() => { goToPrevious() }}>Previous</button>
                <button onClick={() => { goToNext() }}>Next Page</button>
            </ButtonsHome>
        </DivPai>
    )

}

export default Home