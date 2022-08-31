import styled from "styled-components";


export const Container = styled.div`


`
export const Header = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color: blue;
 padding: 3em 2em;

 h1{
     font-size:3em;
     padding-right:14em;
 }
 
 button{
     margin-top: 0.5em;
     cursor: pointer;
     width: 9em;
     margin: none;
 }
`
export const CardContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
grid-gap: 2em;
justify-items: center;
padding: 2em;
cursor: pointer;
`
export const ControlButtons = styled.div`
  display: flex ;
  justify-content: center;

  button{
    cursor: pointer;
     width: 9em;
     margin: none;
     margin-right:1em;
     margin-bottom: 0.5em;
     padding: 0.2em;


  }

`