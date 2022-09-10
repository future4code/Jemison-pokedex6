import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { TypeBackground, Fundo, Stats, Title, Text, Info, Moves, Types, StatsText, NomePokemon, ImagesDiv, PhotoFront, PhotoBack, BackButton, ActionButton, StatsNumbers, StatsBarContainer, StatsBarHP, StatsBarAtk, StatsBarDef, StatsBarSAtak, StatsBarSDef, StatsBarSpd } from '../Styles/StylesNovo'
import GlobalContext from './../Context/GlobalContext';
import arrow from '../Styles/img/Arrow.png'
import actionButton1 from '../Styles/img/ActionButton1.png'
import { useColors } from '../Hooks/useColors';
import { BASE_URL } from '../Constants/Url';
import { goBack } from '../Route/Coordinator';
import catchItBtn from '../Styles/img/Catchit.png'

function PokemonDetails() {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()
    const params = useParams();
    
    const pokeSpritesAnim = context.pokemonObj && context.pokemonObj.sprites && context.pokemonObj.sprites.versions['generation-v']['black-white'].animated
    const pokeStatus = context.pokemonObj && context.pokemonObj.stats
    const pokeTypes = context.pokemonObj && context.pokemonObj.types
    const pokeMoves = context.pokemonObj && context.pokemonObj.moves

    const [pokemonType, pokemonType2, backgroundImage] = useColors(!context.isLoading && context.pokemonObj && context.pokemonObj.types && context.pokemonObj.types[0].type.name, !context.isLoading && context.pokemonObj && context.pokemonObj.types && context.pokemonObj.types[1]?.type.name ? !context.isLoading && context.pokemonObj && context.pokemonObj.types && context.pokemonObj.types[1].type.name : null)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    context.useRequestDetails(`${BASE_URL}/${params.idPokemon}`)

    const numberPokemon = (numero) => {
        if (numero < 10) {
            return (`#00${numero}`)
        } else if (numero > 10 && numero < 100) {
            return (`#0${numero}`)
        } else {
            return (`#${numero}`)
        }
    }

    const percentage = (partialValue) => {
        return ((100 * partialValue) / 180) + "%";
    }

    return (
        <Fundo>
            <TypeBackground backgroundImage={backgroundImage()}>
                <Info>
                    <BackButton>
                        <img onClick={() => goBack(navigate)} src={arrow} alt="back_arrow" />
                    </BackButton>
                    <NomePokemon>
                        <h1>{`${capitalizeFirstLetter(context.pokemonName)}`}</h1>
                        <p>{`${numberPokemon(context.pokemonID)}`}</p>
                    </NomePokemon>
                    <ImagesDiv>
                        <PhotoFront>
                            {!context.isLoading && pokeSpritesAnim && <img src={pokeSpritesAnim.front_default} alt={`${context.pokemonObj.name}_front_image`} />}
                        </PhotoFront>
                        <PhotoBack>
                            {!context.isLoading && pokeSpritesAnim && <img src={pokeSpritesAnim.back_default} alt={`${context.pokemonObj.name}_back_image`} />}
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
                            {!context.isLoading && pokeStatus && <div><p>{pokeStatus[0].base_stat}</p><StatsBarContainer><StatsBarHP width={percentage(pokeStatus && pokeStatus[0].base_stat)}/></StatsBarContainer></div>}
                            {!context.isLoading && pokeStatus && <div><p>{pokeStatus[1].base_stat}</p><StatsBarContainer><StatsBarAtk width={percentage(pokeStatus && pokeStatus[1].base_stat)}/></StatsBarContainer></div>}
                            {!context.isLoading && pokeStatus && <div><p>{pokeStatus[2].base_stat}</p><StatsBarContainer><StatsBarDef width={percentage(pokeStatus && pokeStatus[2].base_stat)}/></StatsBarContainer></div>}
                            {!context.isLoading && pokeStatus && <div><p>{pokeStatus[3].base_stat}</p><StatsBarContainer><StatsBarSAtak width={percentage(pokeStatus && pokeStatus[3].base_stat)}/></StatsBarContainer></div>}
                            {!context.isLoading && pokeStatus && <div><p>{pokeStatus[4].base_stat}</p><StatsBarContainer><StatsBarSDef width={percentage(pokeStatus && pokeStatus[4].base_stat)}/></StatsBarContainer></div>}
                            {!context.isLoading && pokeStatus && <div><p>{pokeStatus[5].base_stat}</p><StatsBarContainer><StatsBarSpd width={percentage(pokeStatus && pokeStatus[5].base_stat)}/></StatsBarContainer></div>}
                        </StatsNumbers>
                    </Stats>
                    <Types>
                        <Text >
                            <img src={pokemonType()} alt="grass_icon" />
                            {!context.isLoading && pokeTypes && pokeTypes[1] ? <img src={pokemonType2()} /> : null}
                        </Text>
                    </Types>
                    <Moves>
                        <Title>
                            Main Moves
                        </Title>
                        <Text >
                            {!context.isLoading && pokeMoves && <p>{capitalizeFirstLetter(pokeMoves[0].move.name)}</p>}
                            {!context.isLoading && pokeMoves && <p>{capitalizeFirstLetter(pokeMoves[1].move.name)}</p>}
                            {!context.isLoading && pokeMoves && <p>{capitalizeFirstLetter(pokeMoves[2].move.name)}</p>}
                            {!context.isLoading && pokeMoves && <p>{capitalizeFirstLetter(pokeMoves[3].move.name)}</p>}
                            {!context.isLoading && pokeMoves && pokeMoves[4] ? <p>{capitalizeFirstLetter(pokeMoves[4].move.name)}</p> : null}
                        </Text>
                    </Moves>
                </Info>
            </TypeBackground>
        </Fundo >
    )
}

export default PokemonDetails
