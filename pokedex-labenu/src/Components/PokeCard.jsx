import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goToDetails } from './../Route/Coordinator';
import {Card, Buttons, ControlButtons, ControlImage} from './../Styles/ StylePokeCard'




function PokeCard ({pokemon}) {
    const navigate = useNavigate();
    return (
        <Card>
            <ControlImage>
            <img src={pokemon.url} alt={pokemon.name} />
            </ControlImage>
            <ControlButtons>
                < Buttons>Adicionar à Pokedex</ Buttons>
                < Buttons onClick={() => goToDetails(navigate)}>Ver Detalhes</ Buttons>
            </ControlButtons>
        </Card>
    )
}

export default PokeCard
// component do Home 