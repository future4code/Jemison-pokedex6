import GlobalContext from './GlobalContext'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GlobalState = (props) => {

    const [isLoading, setIsLoading] = useState(false)
    const [pokemonObj, setPokemonObj] = useState()
    const [pokemonID, setPokemonID] = useState()
    const [pokemonName, setPokemonName] = useState("")

    const [copiaCarta, setCopiaCarta] = useState()

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
                    console.log(error.res.data)
                })
        }
        useEffect(() => {
            console.count("useEffect renderizou!")
            getPokemon()
        }, [])

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

        copiaCarta, 
        setCopiaCarta
    }

    return (
        <GlobalContext.Provider value={states}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalState;