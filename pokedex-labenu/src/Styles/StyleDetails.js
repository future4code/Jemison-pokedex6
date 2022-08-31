import styled from "styled-components";

export const DivPai = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #CCC;
`
export const Bar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #444;
    padding: 3em 2em;

    h1 {
        font-size: 3em;
    }

    button {
        height: 2em;
    }
`
export const HeroContent = styled.div`
    display: grid;
    width: 60vw;
    grid-row-gap: 3em;
    grid-column-gap: 7em;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(8, 1fr);
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
        width: 100%;
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
        width: 100%;
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
    grid-row: 1/3;
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
