import Rotas from './Route/Rotas';
import GlobalStyle from './Styles/globalStyles';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './Constants/Url'

function App() {
   /*const [pokemons, setPokemons] = useState([]);
   const [informationPoke, setInformationPoke] = useState([]);
  const [cardPokedex, setCardPokedex] = useState([]);

  const allPokemons = () => {
    axios.get(`${BASE_URL}pokemon?limit=20&offset=0`)
      .then((response) => {
        setPokemons(response.data.results)
      }).catch((error) => {
        console.log(error, "Bad smells!")
      })
  }

  // requisição ordenar e pegar o id
  useEffect(() => {
    const pokemonList = [];
    console.log(pokemons)
    pokemons && pokemons.length > 0 && pokemons.forEach((pokemon) => {
      console.log('chamou!')
      axios.get(`${BASE_URL}pokemon/${pokemon.name}`)
        .then((response) => {
          console.log(response)
          pokemonList.push(response.data)
        })
      setInformationPoke(pokemonList)

    }).catch((error) => {
      console.log(error, "Bad smells!")
    })
  }, [pokemons])

  // //criar a copia (spread), adicionar no card e pokedex
  // const catchPokemon = (identityPokemon) => {
  //   // Ver o filter ao invez de map e o return da APi
  //   setInformationPoke(informationPoke.map((poke) =>
  //     poke.id !== identityPokemon.id

  //   )

  //   )
  //   setCardPokedex([...cardPokedex, identityPokemon])
  // }
*/
  return (
    <div>
      <GlobalStyle />
      <Rotas />
      </div>
  );
}

export default App;
