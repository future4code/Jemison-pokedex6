import Rotas from './Route/Rotas';
import GlobalStyle from './Styles/globalStyles';
import {useState} from 'react'
import {PokemonContext} from './Context/Context'

function App() {
  const [pokemonCart, setPokemonCart] = useState([])
  
  return (
    <PokemonContext.Provider value={{pokemonCart,setPokemonCart}}>
      <GlobalStyle/>
      <Rotas />
    </PokemonContext.Provider>
  );
}

export default App;
