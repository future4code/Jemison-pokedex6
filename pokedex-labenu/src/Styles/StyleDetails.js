import styled from "styled-components";

export const DivDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #dee9e8;
    height: 100vh;
`
export const DivPai = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: #dee9e8; */
    position: relative;
    padding-bottom: 2em;
`
export const BarHome = styled.div`
    width: 100%;
    background-color: #a4bab7;
    padding: 1em 2em;
    box-shadow: 0px 5px 3px 0px rgba(48,58,43,0.5), inset 0px -4px 5px 0px rgba(242,247,247,0.5);
`

export const BarLogos = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 56%;
        margin: 0 80em;
    
    img {
        width: 25em;
    }
    #dex {
        cursor: pointer;
        width: 8em;
        height: 7em;
    }
`
export const BarLogosPokedex = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 56%;
    img {
        cursor: pointer;
        width: 15em;
    }
    #dex {
        cursor: pointer;
        width: 14em;
        height: 12em;
    }
`
export const BarPokedex = styled.div`
    width: 100%;
    background-color: #a4bab7;
    padding: 1em 2em;
    box-shadow: 0px 5px 3px 0px rgba(48,58,43,0.5), inset 0px -4px 5px 0px rgba(242,247,247,0.5);
`

export const NoPokemons = styled.div`
    text-align: center;
    padding: 16%;
    span {
        
        font-family: 'Cabin';
        font-size: 20em;
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
export const NomePokemon = styled.p`
    color: #222;
    font-size: 2.5em;
    margin-top: 1em;
`

export const Card = styled.div`
    width: 40em;
    height: auto;
`

export const NomePokemon2 = styled.p`
    text-align: center;
    color: #222;
    width: 5em;
    font-size: 2.5em;
    border: 1px solid black;
`

export const TypeBackground2 = styled.div`
    border: 2px solid red;
    background-image: url('https://imgur.com/vtpP3Ke.png');
    background-repeat: no-repeat;
    background-size: contain;
    width: 45em;
    height: 25em;
    padding-top: 20%;
    padding-bottom: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #icone{
        margin-left: -28em;
        width: 7em;
    }
`

export const BotaoCapturar = styled.div `
    border: 1px solid black;
    width: 20em;
    transform: translate(-4em, -8em)
`
export const Image = styled.img`
    width: 12em;
`

export const ImageCard = styled.img`
    width: 10em;
    transform: translate(13em, -10em)
`

export const Infos = styled.div`
    display: flex;
    flex-direction:column;
    transform: translate(-4em, 0)
`

export const CardsHome = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    margin: 4em auto;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(5, 30em);
    grid-column-gap: 3em;
`



export const ButtonsHome = styled.div`
    display: flex;
    width: 0 auto;
`

export const Meter = styled.progress`
    width: 32em;
    height: 4em;
`

export const TextStats = styled.p`
    margin: -1.45em 7.5em;
    font-weight: bold;
    position: absolute;
    color: #414141;
    text-shadow: #ccc 1px 1px 0;
`

export const Fundo = styled.div`
    background-color: #262626;
    position: relative;
`

export const TypeBackground = styled.div`
    background-image: url('https://imgur.com/meJXm0j.png');
    background-repeat: no-repeat;
    background-position: center center;
    padding-top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    h4{
        position: absolute;
        margin-bottom: 100px;
    }
`