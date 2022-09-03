import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPokedex } from './../Route/Coordinator';
import PokeCard from './PokeCard';
import { DivPai, CardsHome, Bar } from '../Styles/StyleDetails'
import axios from 'axios';

function Home() {

    const navigate = useNavigate()

    const [listPokemons, setListPokemons] = useState([])

    const getListPokemons = async () => {
        await axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then((res) => {
                setListPokemons(res.data.results)
            })
            .catch((error) => console.log(error.message))
    }

    const teste = [...listPokemons]
    const bla = teste.map((i, key) => {
        return (
            <PokeCard nomePokemon={i.name} key={i.name} url={i.url} />
        )
    })

    useEffect(() => {
        getListPokemons()
    }, [])

    return (
        <DivPai>
            <Bar>
                <h1>Home</h1>
                <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
            </Bar>
            <CardsHome>
                {bla}
            </CardsHome>
        </DivPai>
    )
}

export default Home