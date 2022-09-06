import axios from 'axios';
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { goToDetails } from './../Route/Coordinator';
import { Container , PokemonName, Card, Image, Buttons, ControlButtons} from '../Styles/StyleDetails'




function PokeCard({ nomePokemon, url }) {
    
    const navigate = useNavigate();
    const goToDetails = (navigate) => { navigate(`details/${pokemonID}`) }

    const [isLoading, setIsLoading] = useState(false)
    const [pokemonCard, setPokemonCard] = useState([])
    const [pokemonID, setPokemonID] = useState()

    const pokeSpritesAnim = pokemonCard && pokemonCard.sprites && pokemonCard.sprites.versions['generation-v']['black-white'].animated

    const capitalizeFirstLetter = (string) => {
       return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
            .then((res) => {
                setIsLoading(false)
                setPokemonCard(res.data)
                setPokemonID(res.data.id)
            }).catch((error) => console.log(error.message))
    }, [])

    const numberPokemon = () => {
        if (pokemonID < 10) {
            return (`#00${pokemonID}`)
        } else if (pokemonID >= 10 && pokemonID < 100) {
            return (`#0${pokemonID}`)
        } else {
            return (`#${pokemonID}`)
        }
    }


    return (
        <Container>
            <Card>
                <PokemonName>{`${numberPokemon(pokemonID)} - ${capitalizeFirstLetter(nomePokemon)}`}</PokemonName>
                {!isLoading && pokeSpritesAnim && <Image src={pokeSpritesAnim.front_default} alt={`${pokemonCard.name}_front_image`} />}
                <ControlButtons>
                    <Buttons>Capturar</Buttons>
                    <Buttons onClick={() => goToDetails(navigate)}>Ver Detalhes</Buttons>
                </ControlButtons>
            </Card>
        </Container>
    )
}

export default PokeCard
// component do Home 