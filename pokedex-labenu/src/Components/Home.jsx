
import { useNavigate } from 'react-router-dom'
import { goToPokedex } from './../Route/Coordinator';
import PokeCard from './PokeCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Container , CardsHome, Header } from '../Styles/StyleDetails'


function Home() {
    const navigate = useNavigate()
    const [listPokemons, setListPokemons] = useState([])

    const getListPokemons =  () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then((res) => {
                setListPokemons(res.data.results)
            })
            .catch((error) => console.log(error.message))
    }
console.log(listPokemons)
    const spreadListPokemons = [...listPokemons]
    const pokemon = spreadListPokemons.map((i) => {
        return (
            <PokeCard nomePokemon={i.name} key={i.name} url={i.url} />
        )
    })

    useEffect(() => {
        getListPokemons()
    }, [])


    return (
        <Container>
        <Header>
            <h1>Home</h1>
            <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
        </Header>
        <CardsHome>
            {pokemon}
        </CardsHome>
    </Container>
)
    
}

export default Home