import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { DivPai, Card, Image, NomePokemon } from '../Styles/StyleDetails'
import GlobalContext from './../Context/GlobalContext';

<<<<<<< HEAD

function CardPokedex() {
=======
function CardPokedex({ pokeElement, removePokemon }) {
    const context = useContext(GlobalContext)
>>>>>>> 33cb2c770be3fabe640fc59e42467985062cd7e7
    const navigate = useNavigate();

    const goToDetails = (navigate) => { navigate(`/details/${pokeElement.id}`) }

    const pokeSpritesAnim = pokeElement && pokeElement.sprites && pokeElement.sprites.versions['generation-v']['black-white'].animated

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const numberPokemon = (numero) => {
        if (numero < 10) {
            return (`#00${numero}`)
        } else if (numero >= 10 && numero < 100) {
            return (`#0${numero}`)
        } else {
            return (`#${numero}`)
        }
    }

    return (
        <DivPai>
            <Card>
                <NomePokemon>{`${numberPokemon(pokeElement.id)} - ${capitalizeFirstLetter(pokeElement.name)}`}</NomePokemon>
                {!context.isLoading && pokeSpritesAnim && <Image src={pokeSpritesAnim.front_default} alt={`${pokeElement.name}_front_image`} />}
                <div>
                    <button onClick={() => removePokemon(pokeElement)}>Remover</button>
                    <button onClick={() => goToDetails(navigate)}>Ver Detalhes</button>
                </div>
            </Card>
        </DivPai>
    )
}

export default CardPokedex