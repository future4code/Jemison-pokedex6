import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome } from './../Route/Coordinator';
import CardPokedex from './CardPokedex';


function Pokedex() {
    const navigate = useNavigate()

    return (
        <div>
            <div>
                <button onClick={() => goToHome(navigate)}>Voltar para home</button>
                <h1>Pokedex</h1>
            </div>
            {<CardPokedex/>}
        </div>
    )
}

export default Pokedex