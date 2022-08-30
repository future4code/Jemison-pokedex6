import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goToDetails } from './../Route/Coordinator';

function PokeCard() {
    const navigate = useNavigate();
    return (
        <div>
            <img src="#" alt="Foto do Pokemon" />
            <div>
                <button>Adicionar à Pokedex</button>
                <button onClick={() => goToDetails(navigate)}>Ver Detalhes</button>
            </div>
        </div>
    )
}

export default PokeCard