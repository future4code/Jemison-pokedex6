import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pokedex from '../Components/Pokedex'
import Home from './../Components/Home';
import PokemonDetails from '../Components/PokemonDetails';

function Rotas() {
  return (
    <BrowserRouter> 
    <Routes>
        <Route index element={<Home/>}/>
        <Route path = '/pokedex' element={<Pokedex />}/>
        <Route path = '/details/:idPokemon' element={<PokemonDetails/>}/>
    </Routes>
    </BrowserRouter> 
  )
}

export default Rotas
