import styled from "styled-components";

export const DivPai = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #DDD;
`
export const Bar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: blue;
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
    grid-gap: 5em;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: ;
    padding: 5em 15em;
`
export const PhotoFront = styled.div`
    justify-self: center;
    grid-column: 1/2;
    width: 20em;
    height: 30em;
    background-color: red;
`
export const PhotoBack = styled.div`
    justify-self: center;
    grid-column: 1/2;
    grid-row: 2/2;
    width: 20em;
    height: 30em;
    background-color: red;
`
export const Stats = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 2/3;
    grid-row: 1/3;
    background-color: gray;
`

export const Title = styled.div`
        text-align: center;
        
        h3 {
            padding-top: 1.5em;
            font-size: 2.5em;
        }
`

export const Text = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1.5em 2em;

    li {
        font-size: 2em;
        padding: .5em .6em;
    }
`

export const Types = styled.div`
    background-color: green;
    height: 20em;
`
export const Moves = styled.div`
    background-color: yellow;
`