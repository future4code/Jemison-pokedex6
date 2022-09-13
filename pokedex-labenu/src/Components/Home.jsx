import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPokedex } from './../Route/Coordinator';
import { DivPai, CardsHome, BarHome, BarLogos, ContainerPagination, NoPokemonsHome, HeroContent } from '../Styles/StyleDetails'
import GlobalContext from './../Context/GlobalContext';
import PokeCard from './PokeCard';
import logo from '../Styles/img/PokeLogo.png'
import pikachuBG from '../Styles/img/Pikachu_BG.jpg'
import pokedexLogo from '../Styles/img/Pokedex_logo.png'
import Pagination from '@mui/material/Pagination';
import axios from 'axios';

function Home() {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    const getListPokemons = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${context.pageChange}&limit=16`)
            .then((res) => {
                const uncaughtPokemons = res.data.results.filter(result => !context.pokedex.map(pokemon => pokemon.name).includes(result.name));
                context.setListPokemons(uncaughtPokemons);
            })
            .catch((error) => console.error(error.message))
    }

    const spreadListPokemons = [...context.listPokemons]
    const pokemons = spreadListPokemons.map((i) => {
        return (
            <PokeCard nomePokemon={i.name} key={i.name} url={i.url} />
        )
    })

    const handleChange = (e, value) => {
        context.setPage(value)
        const offset = (value - 1) * 16
        context.setPageChange(offset)
    }

    useEffect(() => {
        getListPokemons()
    }, [context.pageChange])

    if (context.listPokemons.length === 0) {
        return (
            <DivPai>
                <BarHome>
                    <BarLogos>
                        <img src={logo} alt="pokemon_logo" />
                        <img id="dex" onClick={() => goToPokedex(navigate)} src={pokedexLogo} alt="pokedex_logo" />
                    </BarLogos>
                </BarHome>
                <HeroContent pikachuBG={pikachuBG}>
                    <NoPokemonsHome>
                        <p id="pokecap">Todos os Pokemóns desta página foram capturados.</p>
                        <p id="prof">O Professor Carvalho ficaria orgulhoso de você!</p >
                    </NoPokemonsHome>
                </HeroContent>
                <ContainerPagination>
                    <Pagination
                        count={40}
                        shape="circular"
                        color="primary"
                        size="large"
                        page={context.page}
                        onChange={handleChange}
                        hideNextButton={true}
                        hidePrevButton={true}
                    />
                </ContainerPagination>
            </DivPai>
        )
    } else {
        return (
            <DivPai>
                <BarHome>
                    <BarLogos>
                        <img src={logo} alt="pokemon_logo" />
                        <img id="dex" onClick={() => goToPokedex(navigate)} src={pokedexLogo} alt="pokedex_logo" />
                    </BarLogos>
                </BarHome>
                <CardsHome>
                    {pokemons}
                </CardsHome>
                <ContainerPagination>
                    <Pagination
                        count={40}
                        shape="circular"
                        color="primary"
                        size="large"
                        page={context.page}
                        onChange={handleChange}
                        hideNextButton={true}
                        hidePrevButton={true}
                    />
                </ContainerPagination>
            </DivPai>
        )
    }
}

export default Home