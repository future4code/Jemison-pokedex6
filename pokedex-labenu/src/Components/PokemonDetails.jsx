import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { TypeBackground, Fundo, Stats, Title, Text, Info, Moves, Types, StatsText, NomePokemon, ImagesDiv, PhotoFront, PhotoBack, BackButton, ActionButton, StatsNumbers, StatsBarDiv, StatsBar } from '../Styles/StylesNovo'
import arrow from '../Styles/img/Arrow.png'
import actionButton1 from '../Styles/img/ActionButton1.png'
import { useColors } from '../Hooks/useColors';
import { BASE_URL } from '../Constants/Url';
import { goBack } from '../Route/Coordinator';
import axios from 'axios'

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

    const [pokemonType, pokemonType2, backgroundImage] = useColors(!isLoading && pokemonObj && pokemonObj.types && pokemonObj.types[0].type.name, !isLoading && pokemonObj && pokemonObj.types && pokemonObj.types[1]?.type.name ? !isLoading && pokemonObj && pokemonObj.types && pokemonObj.types[1].type.name : null)

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
        <Fundo>
            <TypeBackground backgroundImage={backgroundImage()}>
                <Info>
                    <BackButton>
                        <img onClick={() => goBack(navigate)} src={arrow} alt="back_arrow" />
                    </BackButton>
                    <ActionButton>
                        <img src={actionButton1} alt="release_button" />
                    </ActionButton>
                    <NomePokemon>
                        <h1>{`${capitalizeFirstLetter(pokemonName)}`}</h1>
                        <p>{`${numberPokemon(pokemonID)}`}</p>
                    </NomePokemon>
                    <ImagesDiv>
                        <PhotoFront>
                            {!isLoading && pokeSpritesAnim && <img src={pokeSpritesAnim.front_default} alt={`${pokemonObj.name}_front_image`} />}
                        </PhotoFront>
                        <PhotoBack>
                            {!isLoading && pokeSpritesAnim && <img src={pokeSpritesAnim.back_default} alt={`${pokemonObj.name}_back_image`} />}
                        </PhotoBack>
                    </ImagesDiv>
                    <Stats>
                        <StatsText >
                            <p>HP</p>
                            <p>Attack</p>
                            <p>Defense</p>
                            <p>Sp.Atk</p>
                            <p>Sp.Def</p>
                            <p>Speed</p>
                        </StatsText>
                        <StatsNumbers >
                            {!isLoading && pokeStatus && <div><p>{pokeStatus[0].base_stat}</p></div>}
                            {!isLoading && pokeStatus && <div><p>{pokeStatus[1].base_stat}</p></div>}
                            {!isLoading && pokeStatus && <div><p>{pokeStatus[2].base_stat}</p></div>}
                            {!isLoading && pokeStatus && <div><p>{pokeStatus[3].base_stat}</p></div>}
                            {!isLoading && pokeStatus && <div><p>{pokeStatus[4].base_stat}</p></div>}
                            {!isLoading && pokeStatus && <div><p>{pokeStatus[5].base_stat}</p></div>}
                        </StatsNumbers>
                        <StatsBarDiv>
                            <StatsBar>
                            </StatsBar>
                        </StatsBarDiv>
                    </Stats>
                    <Types>
                        <Text >
                            <img src={pokemonType()} alt="grass_icon" />
                            {!isLoading && pokeTypes && pokeTypes[1] ? <img src={pokemonType2()} /> : null}
                        </Text>
                    </Types>
                    <Moves>
                        <Title>
                            Main Moves
                        </Title>
                        <Text >
                            {!isLoading && pokeMoves && <p>{capitalizeFirstLetter(pokeMoves[0].move.name)}</p>}
                            {!isLoading && pokeMoves && <p>{capitalizeFirstLetter(pokeMoves[1].move.name)}</p>}
                            {!isLoading && pokeMoves && <p>{capitalizeFirstLetter(pokeMoves[2].move.name)}</p>}
                            {!isLoading && pokeMoves && <p>{capitalizeFirstLetter(pokeMoves[3].move.name)}</p>}
                            {!isLoading && pokeMoves && pokeMoves[4] ? <p>{capitalizeFirstLetter(pokeMoves[4].move.name)}</p> : null}
                        </Text>
                    </Moves>
                </Info>
            </TypeBackground>
        </Fundo >
    )
}

export default PokemonDetails
