import GlobalContext from './GlobalContext'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GlobalState = (props) => {

    const [isLoading, setIsLoading] = useState(false)
    const [pokemonObj, setPokemonObj] = useState()
    const [pokemonID, setPokemonID] = useState()
    const [pokemonName, setPokemonName] = useState("")

    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cartt') || '[]')

    const [pokedex, setPokedex] = useState(cartFromLocalStorage)
    const [listPokemons, setListPokemons] = useState([])
    const [page, setPage] = useState(1)
    const [pageChange, setPageChange] = useState(0)

    const useRequestDetails = (url) => {
        const getPokemon = () => {
            setIsLoading(true)
            axios.get(url)
                .then((res) => {
                    setIsLoading(false)
                    setPokemonObj(res.data)
                    setPokemonID(res.data.id)
                    setPokemonName(res.data.name)
                }).catch((error) => {
                    console.error(error.res.data)
                })
        }
        useEffect(() => {
            getPokemon()
        },[])

        return { pokemonObj, isLoading, pokemonID, pokemonName }
    }

    const states = {
        isLoading,
        setIsLoading,
        pokemonObj,
        setPokemonObj,
        pokemonID,
        setPokemonID,
        pokemonName,
        setPokemonName,
        useRequestDetails,

        pokedex, 
        setPokedex,
        listPokemons, 
        setListPokemons,
        page, 
        setPage,
        pageChange, 
        setPageChange
    }

    return (
        <GlobalContext.Provider value={states}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalState;