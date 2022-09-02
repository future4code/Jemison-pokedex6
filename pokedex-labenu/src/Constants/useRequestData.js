import { useEffect, useState } from "react";
import axios from 'axios'

const useRequestData = (url) => {
    const [data, setData] = useState()

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error, "Deu ruim!")
            alert("Ocorreu um erro!")
        })

    }, [url])

    return data
}

export default useRequestData