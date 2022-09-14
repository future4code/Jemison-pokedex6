import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { DivPai, NamePokemon, NumberPokemon, Card, ImageCard, ImgCatch, TypeBackground2, Infos, BotaoCapturar, ImgInfo } from '../Styles/StyleDetails'
import GlobalContext from './../Context/GlobalContext';
import { useColors } from '../Hooks/useColors'
import catchItBtn from '../Styles/img/Catchit.png'
import infoBtn from '../Styles/img/Info.png'
import pokeballWaterMark from '../Styles/img/Pokebola_watermark 1.png'
import axios from 'axios';

function PokeCard({ nomePokemon, url }) {
    const context = useContext(GlobalContext)
    const navigate = useNavigate();

    const goToDetails = (navigate) => { navigate(`/details/${pokemonCard.id}`) }

    const [isLoading, setIsLoading] = useState(false)
    const [pokemonCard, setPokemonCard] = useState({})
    const [pokemonID, setPokemonID] = useState()

    const pokeSpritesAnim = pokemonCard && pokemonCard.sprites && pokemonCard.sprites.versions['generation-v']['black-white'].animated
    const [pokemonType, pokemonType2, backgroundImage, backgroundCards, backgroundBorder] = useColors(!context.isLoading && pokemonCard && pokemonCard.types && pokemonCard.types[0].type.name, !context.isLoading && pokemonCard && pokemonCard.types && pokemonCard.types[1]?.type.name ? !context.isLoading && pokemonCard && pokemonCard.types && pokemonCard.types[1].type.name : null);

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
        const newList = context.listPokemons.filter(function (poke) { return pokemon.name !== poke.name; });
        context.setListPokemons(newList)
        if (context.pokedex.length === 0) {
            alert(`Pokemon capturado com sucesso! Encontre seus Pokemons clicando no ícone de Pokedex no canto direito da tela.`)
        }
    }

    return (
        <DivPai >
            <Card>
                <TypeBackground2 backgroundCards={backgroundCards()} backgroundBorder={backgroundBorder()}>
                    <img id="wmball" src={pokeballWaterMark} alt="waterMark_pokeball" />
                    <Infos>
                        <NamePokemon>
                            {`${capitalizeFirstLetter(nomePokemon)}`}
                        </NamePokemon>
                        <NumberPokemon>
                            {`${numberPokemon(pokemonID)}`}
                        </NumberPokemon>
                    </Infos>
                    <img id="icone" src={pokemonType()} alt="grass_icon" />
                    {!isLoading && pokeSpritesAnim && <ImageCard src={pokeSpritesAnim.front_default} alt={`${pokemonCard.name}_front_image`} />}
                    <BotaoCapturar>
                        <ImgCatch onClick={() => addPokemonPokedex(pokemonCard)} src={catchItBtn} alt="catch_button" />
                        <ImgInfo onClick={() => goToDetails(navigate)} src={infoBtn} alt="info_button" />
                    </BotaoCapturar>
                </TypeBackground2>
            </Card>
        </DivPai>
    )
}
export default PokeCard