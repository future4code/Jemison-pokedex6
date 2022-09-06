import GlobalContext from './Context/GlobalContext'

const GlobalState = (props) => {

    // Estados aqui 
    //As requisições aqui (TODAS) uma const para cada requisição
    //const states = passar os estados e a requisição(data)
    return (
        <GlobalContext.Provider value={{states}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalState;