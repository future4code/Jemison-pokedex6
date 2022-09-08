import GlobalContext from './GlobalContext'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GlobalState = (props) => {

    // Estados aqui 
    //As requisições aqui (TODAS) uma const para cada requisição
    //const states = {passar os estados e a requisição(data)}
    
    return (
        <GlobalContext.Provider value={{listPokemons,setListPokemons}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalState;