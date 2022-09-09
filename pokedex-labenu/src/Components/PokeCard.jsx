import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { DivPai, NomePokemon2, Card, ImageCard, CardSpace, TypeBackground2, Infos, BotaoCapturar } from '../Styles/StyleDetails'
import GlobalContext from './../Context/GlobalContext';
import { useColors } from '../Hooks/useColors';
import axios from 'axios';

function PokeCard({ nomePokemon, url }) {
    const context = useContext(GlobalContext)
    const navigate = useNavigate();
    const goToDetails = (navigate) => { navigate(`details/${pokemonID}`) }

    const [isLoading, setIsLoading] = useState(false)
    const [pokemonCard, setPokemonCard] = useState({})
    const [pokemonID, setPokemonID] = useState()

    const pokeSpritesAnim = pokemonCard && pokemonCard.sprites && pokemonCard.sprites.versions['generation-v']['black-white'].animated
    const [pokemonType, backgroundImage] = useColors(!context.isLoading && pokemonCard && pokemonCard.types && pokemonCard.types[0].type.name)

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

    const numberPokemon = (numero) => {
        if (numero < 10) {
            return (`#00${numero}`)
        } else if (numero >= 10 && numero < 100) {
            return (`#0${numero}`)
        } else {
            return (`#${numero}`)
        }
    }

    const addPokemonPokedex = (pokemon) => {
        context.setPokedex([...context.pokedex, pokemon])
        const newList = context.listPokemons.filter(function (poke) { return pokemon.name != poke.name; });
        context.setListPokemons(newList)
    }

    return (
        <DivPai >
            <Card>
                <TypeBackground2 backgroundImage={backgroundImage()}>
                    <Infos>
                        <NomePokemon2>
                            {`${capitalizeFirstLetter(nomePokemon)}`}
                        </NomePokemon2>
                        <NomePokemon2>
                            {`${numberPokemon(pokemonID)}`}
                        </NomePokemon2>
                    </Infos>
                    <img id="icone" src={pokemonType()} alt="grass_icon" />
                    {/* {!isLoading && pokeSpritesAnim && <ImageCard src={pokeSpritesAnim.front_default} alt={`${pokemonCard.name}_front_image`} />} */}
                    <BotaoCapturar>
                        <button onClick={() => addPokemonPokedex(pokemonCard)}>Capturar</button>
                    </BotaoCapturar>
                </TypeBackground2>
            </Card>
        </DivPai>
    )


}
export default PokeCard