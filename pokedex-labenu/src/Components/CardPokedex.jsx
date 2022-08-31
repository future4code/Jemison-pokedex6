import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goToDetails } from './../Route/Coordinator';
import {Card, Buttons , Image} from "../Styles/stylesCardPokedex"
import jon from "../Styles/img/jungkook-2.png"


function CardPokedex() {
    const navigate = useNavigate();

    return (
        <Card>
            <Image>
            <img src={jon} alt="Foto do Pokemon" />
            </Image>
            <div>
                < Buttons>Remover</ Buttons>
                < Buttons onClick={() => goToDetails(navigate)}>Ver Detalhes</ Buttons>
            </div>
        </Card>
        


    )
}

export default CardPokedex