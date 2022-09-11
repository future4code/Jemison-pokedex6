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
    background-color: #dee9e8;
    position: relative;
    /* padding-bottom: 2em; */
`
export const DivPaiPokedex = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    background-color: #dee9e8;
    position: relative;
    padding-bottom: 2em;
`
export const BarHome = styled.div`
    width: 100%;
    background-color: #a4bab7;
    margin-bottom: 2em;
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
        font-weight: 700;
        font-size: 20em;
        width: 35%;
        margin-bottom: 1em;
        text-shadow: 2px -1px 1px rgba(255,255,255,.1), -2px 2px 1px rgba(0,0,0,.5);
    }
`

export const HeroContent = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: -1.9em;
    background-image: url(${(props) => props.pikachuBG});
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: inset 0px 4px 4px 0px rgba(48,58,43,0.5);
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

export const NamePokemon = styled.p`
    
    text-align: center;
    font-family: 'Cabin';
    font-style: italic;
    font-weight: bold;
    font-size: 4.75em;
    color: white;
    padding-bottom: .2em;
    text-shadow: 1px -1px 1px rgba(255,255,255,.1), -2px 2px 1px rgba(0,0,0,.5);
    transform: translate(0, -0.4em)
`

export const NumberPokemon = styled.div`
    color: transparent;
    background: #000;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    text-shadow: -1px 1px 1px rgba(255,255,255,.3);
    text-align: center;
    font-family: 'Cabin';
    font-style: italic;
    font-weight: 600;
    font-size: 2.85em;
    transform: translate(0, -.8em)
`

export const ContainerPagination = styled.div  `
  width: 100%;
  padding-bottom: 2em;
  padding-top: 2em;
  display: flex;
  justify-content: center;
  box-shadow: 0px -5px 5px 0px rgba(48,58,43,0.2), inset 0px 4px 5px 0px rgba(242,247,247,0.75);
`

export const ImgCatch = styled.img`
    cursor: pointer;
    position: absolute;
    width: 5.25em;
    transform: translate(-2.5em, -0.1em);
    filter: drop-shadow(-3px 3px 1px rgba(0,0,0,.5));
`

export const ImgInfo = styled.img`
    cursor: pointer;
    position: absolute;
    width: 5.5em;
    transform: translate(5em, 0);
    filter: drop-shadow(-2px 2px 1px rgba(0,0,0,.5));
`
export const ImgRelease = styled.img`
    cursor: pointer;
    position: absolute;
    width: 9em;
    transform: translate(-5em, 0);
    filter: drop-shadow(-2px 2px 1px rgba(0,0,0,.5));
`

export const TypeBackground2 = styled.div`
    background: ${(props) => props.backgroundCards};
    border: 0.5em ridge ${(props) => props.backgroundBorder};
    border-radius: 3em;
    width: 42em;
    height: 22em;
    padding-top: 20%;
    padding-bottom: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(-4px 8px 1px rgba(0,0,0,.5));

    #icone{
        transform: translate(-14em, -4em);
        width: 9em;
        filter: drop-shadow(-3px 3px 1px rgba(0,0,0,.5));
    }

    #wmball {
        position: absolute;
        transform: translate(-12em, 0)
    }
`

export const NoPokemonsHome = styled.div`
    text-align: center;
    padding: 16%;

    #prof {
        position: absolute;
        display:block;
        font-family: 'Cabin';
        font-size: 7em;
        width: 35%;
        margin-bottom: 1em;
        text-shadow: 1px -1px 1px rgba(255,255,255,.1), -2px 2px 1px rgba(0,0,0,.5);
        transform: translate(-2em, 5em)
    }
    #pokecap {
        position: absolute;
        display:block;
        font-family: 'Cabin';
        font-size: 7em;
        color: white;
        width: 35%;
        margin-bottom: 1em;
        text-shadow: 1px -1px 1px rgba(255,255,255,.1), -2px 2px 1px rgba(0,0,0,.5);
        transform: translate(5em, -2em)
    }
`

export const BotaoCapturar = styled.div`
    transform: translate(-5em, -7.5em)
`
export const Image = styled.img`
    width: 12em;
`

export const ImageCard = styled.img`
    position: absolute;
    width: 13em;
    transform: translate(13em, -3em)
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
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(4, 28em);
    grid-column-gap: 5em;
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