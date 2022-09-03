import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { DivPai, Bar, HeroContent, PhotoFront, PhotoBack, Stats, Types, Moves, Title, Text } from '../Styles/StyleDetails'
import { goBack } from './../Route/Coordinator';
import { BASE_URL } from './../Constants/Url';
import axios from 'axios';

function PokemonDetails() {

    const navigate = useNavigate()
    const params = useParams();

    const [pokemonObj, setPokemonObj] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [pokemonName, setPokemonName] = useState("")
    const [pokemonID, setPokemonID] = useState("")

    const pokeSpritesAnim = pokemonObj && pokemonObj.sprites && pokemonObj.sprites.versions['generation-v']['black-white'].animated
    const pokeStatus = pokemonObj && pokemonObj.stats
    const pokeTypes = pokemonObj && pokemonObj.types
    const pokeMoves = pokemonObj && pokemonObj.moves

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${BASE_URL}/${params.idPokemon}`)
            .then((res) => {
                setIsLoading(false)
                setPokemonObj(res.data)
                setPokemonName(res.data.name)
                setPokemonID(res.data.id)
            }).catch((error) => console.log(error.message))
    }, [])

    const numberPokemon = () => {
        if (pokemonID < 10) {
            return (`#00${pokemonID}`)
        } else if (pokemonID > 10 && pokemonID < 100) {
            return (`#0${pokemonID}`)
        } else {
            return (`#${pokemonID}`)
        }
    }

    return (
        <DivPai>
            <Bar>
                <button onClick={() => goBack(navigate)}>Voltar</button>
                <h1>{`${capitalizeFirstLetter(pokemonName)} - ${numberPokemon(pokemonID)}`}</h1>
                <button>Adicionar/Remover da Pokedex</button>
            </Bar>
            <HeroContent>
                <PhotoFront>
                    {!isLoading && pokeSpritesAnim && <img src={pokeSpritesAnim.front_default} alt={`${pokemonObj.name}_front_image`} />}
                </PhotoFront>
                <PhotoBack>
                    {!isLoading && pokeSpritesAnim && <img src={pokeSpritesAnim.back_default} alt={`${pokemonObj.name}_back_image`} />}
                </PhotoBack>
                <Types>
                    <Title>
                        Tipos
                    </Title>
                    <Text >
                        {!isLoading && pokeTypes && <p>{capitalizeFirstLetter(pokemonObj.types[0].type.name)}</p>}
                        {!isLoading && pokeTypes && pokeTypes[1] ? <p>{capitalizeFirstLetter(pokeTypes[1].type.name)}</p> : null }
                    </Text>
                </Types>
                <Stats>
                    <Title>
                        Stats
                    </Title>
                    <Text >
                        {!isLoading && pokeStatus && <p>{capitalizeFirstLetter(`${pokeStatus[0].stat.name}:`)}</p>}
                        {!isLoading && pokeStatus && <p>{pokeStatus[0].base_stat}</p>}
                        {!isLoading && pokeStatus && <p>{capitalizeFirstLetter(`${pokeStatus[1].stat.name}:`)}</p>}
                        {!isLoading && pokeStatus && <p>{pokeStatus[1].base_stat}</p>}
                        {!isLoading && pokeStatus && <p>{capitalizeFirstLetter(`${pokeStatus[2].stat.name}:`)}</p>}
                        {!isLoading && pokeStatus && <p>{pokeStatus[2].base_stat}</p>}
                        {!isLoading && pokeStatus && <p>{capitalizeFirstLetter(`${pokeStatus[3].stat.name}:`)}</p>}
                        {!isLoading && pokeStatus && <p>{pokeStatus[3].base_stat}</p>}
                        {!isLoading && pokeStatus && <p>{capitalizeFirstLetter(`${pokeStatus[4].stat.name}:`)}</p>}
                        {!isLoading && pokeStatus && <p>{pokeStatus[4].base_stat}</p>}
                        {!isLoading && pokeStatus && <p>{capitalizeFirstLetter(`${pokeStatus[5].stat.name}:`)}</p>}
                        {!isLoading && pokeStatus && <p>{pokeStatus[5].base_stat}</p>}

                    </Text>
                </Stats>
                <Moves>
                    <Title>
                        Principais Ataques
                    </Title>
                    <Text >
                        {!isLoading && pokeMoves && <p>{capitalizeFirstLetter(pokeMoves[0].move.name)}</p>}
                        {!isLoading && pokeMoves && <p>{capitalizeFirstLetter(pokeMoves[1].move.name)}</p>}
                        {!isLoading && pokeMoves && <p>{capitalizeFirstLetter(pokeMoves[2].move.name)}</p>}
                        {!isLoading && pokeMoves && <p>{capitalizeFirstLetter(pokeMoves[3].move.name)}</p>}
                        {!isLoading && pokeMoves && <p>{capitalizeFirstLetter(pokeMoves[4].move.name)}</p>}
                    </Text>
                </Moves>
            </HeroContent>
        </DivPai>
    )
}

export default PokemonDetails