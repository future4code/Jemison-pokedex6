import React, {useState, useEffect,  useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome } from './../Route/Coordinator';
import CardPokedex from './CardPokedex';
import { DivPai, Bar } from '../Styles/StyleDetails'
import GlobalContext from './../Context/GlobalContext';

function Pokedex() {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    const [pokemonCapturado, setPokemonCapturado] = useState(context.copiaCarta)

    const [arrayTest, setArrayTest] = useState([])

    const guardaPokemon = () => {
        let newArray = [...arrayTest, pokemonCapturado]
        setArrayTest(newArray)
    }

    console.log(arrayTest)


    useEffect(() => {
        guardaPokemon()
    }, [])

    // setArrayTest(teste, lastCaptured)
    // console.log(arrayTest)

    // fazer um map com o array que está somando tudo, com  um return ( cardPokedex props=props)

    return (
        <DivPai>
            <Bar>
                <button onClick={() => goToHome(navigate)}>Voltar para home</button>
                <h1>Pokedex</h1>
            </Bar>
            {<CardPokedex />}
        </DivPai>
    )
}

export default Pokedex