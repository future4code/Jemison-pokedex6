import styled from 'styled-components'

export const Card = styled.div`
height:16em ;
border: 1px solid;
width: 15em;
font-size: 1.5em;
display: flex;
flex-direction: column;
justify-content: space-between;

p{
    font-size: 1.2em;
}
`

export const ControlImage = styled.div`
display: flex;
justify-content: center;
margin-top: 3.5em;
img{
    
    height: 12em;
    width:12em;
}


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
