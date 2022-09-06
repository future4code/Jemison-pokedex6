import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #CCC;
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #d50000;
    padding: 3em 2em;
    h1 {
        font-size: 3em;
    }
    button {
        height: 2em;
    }
    img{
       height: 9em;
        width: 35em;
    }
`
export const HeroContent = styled.div`
    display: grid;
    width: 60vw;
    grid-row-gap: 3em;
    grid-column-gap: 3em;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(auto-fit, 1fr);
    margin: 7em auto;
`
export const PhotoFront = styled.div`
    justify-self: center;
    grid-column: 1/2;
    grid-row: 1/5;
    width: 100%;
    background-color: #DDD;
    border: 1px solid #EEE;
    border-radius: 2em;
    box-shadow:12px 12px 10px 5px #BBBBBB;
    img {
        width: 90%;
    }
`
export const PhotoBack = styled.div`
    justify-self: center;
    grid-column: 1/2;
    grid-row: 5/9;
    width: 100%;
    background-color: #DDD;
    border: 1px solid #EEE;
    border-radius: 2em;
    box-shadow:12px 12px 10px 5px #BBBBBB;
    img {
        width: 90%;
    }
`
export const Stats = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    grid-column: 2/3;
    grid-row: 1/9;
    background-color: #DDD;
    border: 1px solid #EEE;
    border-radius: 2em;
    box-shadow:12px 12px 10px 5px #BBBBBB;
`
export const Types = styled.div`
    grid-column: 3/4;
    grid-row: 1/5;
    background-color: #DDD;
    border: 1px solid #EEE;
    border-radius: 2em;
    box-shadow:12px 12px 10px 5px #BBBBBB;
`
export const Moves = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    grid-column: 3/4;
    grid-row: 3/9;
    background-color: #DDD;
    border: 1px solid #EEE;
    border-radius: 2em;
    box-shadow:12px 12px 10px 5px #BBBBBB;
`
export const Title = styled.h3`
    text-align: center;
    margin-top: 0.5em;
    font-size: 2.5em;
`
export const Text = styled.div`
    margin: 2em;
    p {
        font-size: 2em;
    }
`

export const PokemonName = styled.p`
    color: #222;
    font-size: 2.5em;
    margin-top: 1em;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 2px solid black;
    width: 25em;
    height: 30em;
`

export const CardsHome = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: repeat(4, 30em);
    grid-row-gap: 2em;
`

export const Image = styled.img`
    width: 12em;
    `
    export const ControlButtons = styled.div`
    display: flex;
    margin-bottom:0.5em;
    
    `
    export const Buttons = styled.button`
    width: 8em;
    height: 2.6em;
    margin: 0.2em;
    cursor: pointer;
    border: none;
    
    `