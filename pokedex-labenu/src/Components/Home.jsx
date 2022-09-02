
import { useNavigate } from 'react-router-dom'
import { goToPokedex } from './../Route/Coordinator';
import PokeCard from './PokeCard';
import { Container, Header, CardContainer, ControlButtons } from './../Styles/StyleHome'
import useRequestData from '../hooks/useRequestData'
import { BASE_URL } from '../Constants/Url';
import { useContext } from 'react';
import { PokemonContext } from '../Context/Context';

function Home() {
    const navigate = useNavigate()
    const {pokemonCart, setPokemonCart} = useContext(PokemonContext)
    const data = useRequestData(`${BASE_URL}pokemon?limit=20&offset=0`)
    const infPokemons = useRequestData(`${BASE_URL}pokemon/${pokemon.name}`)

    const addPokemon = (pokemon) => {
        const newPokemonCart = [...pokemonCart]
        const pokemonIndex = pokemonCart.findIndex((item) => item.name === pokemon.name)
        if (pokemonIndex === -1) {
            newPokemonCart.push({ ...pokemon, quantity: 1 })
        } else {
            newPokemonCart[pokemonIndex].quantity++
        }
      //  setPokemonCart(newPokemonCart)
    }
    console.log(pokemonCart)
    
    return (
        <Container>
            <Header>
                <button onClick={() => goToPokedex(navigate)}>Ir para POKEDEX</button>
                <h1>Pokemons Disponíveis</h1>
            </Header>
            <CardContainer>
                {data && data.results.map((pokemon) => {
                    return <PokeCard key={pokemon.name} pokemon={pokemon} addPokemon={addPokemon} />
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