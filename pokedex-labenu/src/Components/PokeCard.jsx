import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { DivPai, NomePokemon, Card, Image } from '../Styles/StyleDetails'
import axios from 'axios';

function PokeCard({ nomePokemon, url }) {

    const navigate = useNavigate();

    const goToDetails = (navigate) => { navigate(`details/${pokemonID}`) }

    const goToTest = (navigate) => { navigate('/details/teste') }

    const [isLoading, setIsLoading] = useState(false)
    const [pokemonCard, setPokemonCard] = useState([])
    const [pokemonID, setPokemonID] = useState()

    const pokeSpritesAnim = pokemonCard && pokemonCard.sprites && pokemonCard.sprites.versions['generation-v']['black-white'].animated

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
            .then((res) => {
                setIsLoading(false)
                setPokemonCard(res.data)
                setPokemonID(res.data.id)
            }).catch((error) => console.log(error.message))
    }, [])

    const numberPokemon = () => {
        if (pokemonID < 10) {
            return (`#00${pokemonID}`)
        } else if (pokemonID >= 10 && pokemonID < 100) {
            return (`#0${pokemonID}`)
        } else {
            return (`#${pokemonID}`)
        }
    }

    return (
        <DivPai >
            <Card>
                <NomePokemon>{`${numberPokemon(pokemonID)} - ${capitalizeFirstLetter(nomePokemon)}`}</NomePokemon>
                {!isLoading && pokeSpritesAnim && <Image src={pokeSpritesAnim.front_default} alt={`${pokemonCard.name}_front_image`} />}
                <div>
                    <button onClick={() => goToTest(navigate)}>Capturar</button>
                    <button onClick={() => goToDetails(navigate)}>Ver Detalhes</button>
                </div>
            </Card>
        </DivPai>
    )
}

export default PokeCard
// component do Home 