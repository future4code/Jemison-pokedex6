import { useState, useEffect } from 'react'
import axios from 'axios'

export const useRequest = (url) => {

    const [data, setData] = useState([{}])

    const getPokemon = async () => {
        await axios.get(url)
            .then((response) => {
                setData(response.data)
            }).catch((error) => {
                console.log(error.response.data)
            })
    }
    useEffect(() => {
        getPokemon()
    },[url])

    return [data]
}