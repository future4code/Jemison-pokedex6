import styled from "styled-components";

export const Fundo = styled.div`
    position: relative;
`

export const TypeBackground = styled.div`
    padding: 24.633%;
    background-color: #262626;
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-attachment: local;
    background-position: 50% 50%;
`

export const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const NomePokemon = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: -53em;
    text-align: center;
    
    h1{
        font-family: 'Cabin';
        font-style: italic;
        font-weight: bold;
        font-size: 8em;
        color: white;
        padding-bottom: .2em;
        text-shadow: 1px -1px 1px rgba(255,255,255,.1), -2px 2px 1px rgba(0,0,0,.5);

    }
    p{
        color: #242424;
        font-size: 5em;
        font-family: 'Cabin';
        font-style: italic;
        font-weight: 600;
        text-shadow: 1px -1px 1px rgba(255,255,255,.1), -1px 1px 1px rgba(0,0,0,.5);
    }
`

export const BackButton = styled.div`
    position: absolute;
    margin-top: -58em;
    margin-left: -110em;

    img{
        cursor: pointer;
    }
`
export const ActionButton = styled.div`
    position: absolute;
    margin-top: -58em;
    margin-right: -100em;

    img{
        cursor: pointer;
    }
`

export const ImagesDiv = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 3em;
    margin-left: -90em;
    margin-top: 3em;
`

export const PhotoFront = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25em;
    height: 25em;

    img{
        width: 30em;
    }
`
export const PhotoBack = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25em;
    height: 25em;
    margin-left: -15em;

    img{
        width: 30em;
    }
`

export const Stats = styled.div`
    display: flex;
    position: absolute;
    margin-left: -20em;
`

export const StatsText = styled.div`
    margin-right: 3em;
    display: flex;
    flex-direction: column;
    p{
        font-family: 'Cabin';
        text-align: start;
        font-size: 2.5em;
        padding-top: 0.6em;
        color: #d9d9d9;
        text-shadow: -1px -1px 1px rgba(255,255,255,.1), -1px 1px 1px rgba(0,0,0,.5);
    }
`

export const StatsNumbers = styled.div`
        p{
        text-align: center;
        font-weight: bold;
        font-size: 2.5em;
        padding-top: 0.6em;
        color: white;
        text-shadow: -1px -1px 1px rgba(255,255,255,.1), -1px 1px 1px rgba(0,0,0,.5);
        }
`

export const Types = styled.div`
    position: absolute;
    margin-top: 52em;
    margin-left: -25em;

    img{
        margin-left: 7em;
        filter: drop-shadow(-3px 3px 1px rgba(0,0,0,.5))
    }
`
export const Moves = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 20em;
    margin-right: -105em;
`

export const Title = styled.h3`
    text-align: center;
    font-style: italic;
    margin: .5em 0;
    font-size: 3.5em;
    color: #FFF;
    text-shadow: -1px -1px 1px rgba(255,255,255,.1), -2px 2px 1px rgba(0,0,0,.5);
`

export const Text = styled.div`

    p {
        font-family: 'Cabin';
        font-weight: 500;
        font-size: 3em;
        color: white;
        text-align: center;
        padding-top: 0.8em;
        text-shadow: 1px -1px 1px rgba(255,255,255,.1), -2px 2px 1px rgba(0,0,0,.5);
    }
`
export const ButtonsHome = styled.div`
    display: flex;
    width: 0 auto;
`

export const StatsBarContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    width: 30em;
    height: 2em;
    background: #163A41;
    background: linear-gradient(to right, rgba(150,150,175,1), rgba(255,255,255,0.25));
    margin-left: 6em;
    margin-top: -2.4em;
    border-radius: .7em;
    box-shadow: 1px -1px 1px rgba(255,255,255,.1), -1px 2px 1px rgba(0,0,0,.5);
`
export const StatsBarHP = styled.span`
    position: absolute;
    display: flex;
    width: ${props => props.width};
    height: 2em;
    background: #00D;
    border-radius: .7em;
    background: linear-gradient(to bottom, #000000 0%, #444 50%, #000000 100%);
`
export const StatsBarAtk = styled.span`
    position: absolute;
    display: flex;
    width: ${props => props.width};
    height: 2em;
    background: #00D;
    border-radius: .7em;
    background: linear-gradient(to bottom, #000000 0%, #444 50%, #000000 100%);
`
export const StatsBarDef = styled.span`
    position: absolute;
    display: flex;
    width: ${props => props.width};
    height: 2em;
    background: #00D;
    border-radius: .7em;
    background: linear-gradient(to bottom, #000000 0%, #444 50%, #000000 100%);
`
export const StatsBarSAtak = styled.span`
    position: absolute;
    display: flex;
    width: ${props => props.width};
    height: 2em;
    background: #00D;
    border-radius: .7em;
    background: linear-gradient(to bottom, #000000 0%, #444 50%, #000000 100%);
`
export const StatsBarSDef = styled.span`
    position: absolute;
    display: flex;
    width: ${props => props.width};
    height: 2em;
    background: #00D;
    border-radius: .7em;
    background: linear-gradient(to bottom, #000000 0%, #444 50%, #000000 100%);
`
export const StatsBarSpd = styled.span`
    position: absolute;
    display: flex;
    width: ${props => props.width};
    height: 2em;
    background: #00D;
    border-radius: .7em;
    background: linear-gradient(to bottom, #000000 0%, #444 50%, #000000 100%);
`