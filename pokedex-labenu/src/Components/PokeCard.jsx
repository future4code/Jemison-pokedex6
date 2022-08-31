import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goToDetails } from './../Route/Coordinator';
import {Card, Buttons, ControlButtons, ControlImage} from './../Styles/ StylePokeCard'
import sidy from './../Styles/img/sidy.jpeg'


function PokeCard() {
    const navigate = useNavigate();
    return (
        <Card>
            <ControlImage>
            <img src={sidy} alt="Foto do Pokemon" />
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