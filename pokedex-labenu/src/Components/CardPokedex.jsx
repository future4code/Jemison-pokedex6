import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { goToDetails } from './../Route/Coordinator';

function CardPokedex() {
    const navigate = useNavigate();

    return (
        <div>
            <img src="#" alt="Foto do Pokemon" />
            <div>
                <button>Remover</button>
                {/* <button onClick={() => goToDetails(navigate)}>Ver Detalhes</button> */}
            </div>
        </div>
    )
}

export default CardPokedex
// junto com pokedex