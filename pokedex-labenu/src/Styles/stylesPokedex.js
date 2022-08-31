import styled from "styled-components";

export const HeaderPokedex = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: blue;
    padding: 3em 2em;

    h1 {
        font-size: 3em;
        padding-right: 22em;
    }

`
export const HeanderButton = styled.div`
    margin-top:1em;
    cursor: pointer;

`
export const  PokemonCard = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 2em;
    padding: 2em;


`
