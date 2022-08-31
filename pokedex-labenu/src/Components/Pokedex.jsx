import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome } from './../Route/Coordinator';
import CardPokedex from './CardPokedex';
import {Buttons } from "../Styles/stylesCardPokedex"
import {HeaderPokedex, HeanderButton,PokemonCard } from "../Styles/stylesPokedex"

function Pokedex() {
    const navigate = useNavigate()

    return (
        <div>
            <HeaderPokedex>
                <HeanderButton>
                <Buttons onClick={() => goToHome(navigate)}>Voltar para home</Buttons>
                </HeanderButton>
                <h1>Pokedex</h1>

            </HeaderPokedex>

            <PokemonCard>
                  {<CardPokedex/>}
                  {<CardPokedex/>}
                  {<CardPokedex/>}
                  {<CardPokedex/>}
                  {<CardPokedex/>}
                  {<CardPokedex/>}
                  {<CardPokedex/>}
                  {<CardPokedex/>}
                  {<CardPokedex/>}
            </PokemonCard>
            
            <Buttons>Avançar</Buttons>
            <Buttons>Voltar</Buttons>
        </div>
    )
}

export default Pokedex