import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { DivPai, Card, Image } from '../Styles/StyleDetails'
import GlobalContext from './../Context/GlobalContext';

function CardPokedex() {
    const context = useContext(GlobalContext)
    const navigate = useNavigate();

    const goToDetails = (navigate) => { navigate(`/details/${context.copiaCarta.id}`) }

    const pokeSpritesAnim = context.copiaCarta && context.copiaCarta.sprites && context.copiaCarta.sprites.versions['generation-v']['black-white'].animated

    return (
        <DivPai>
            <Card>
                <h2>{context.copiaCarta.name}</h2><span>{context.copiaCarta.id}</span>
                {!context.isLoading && pokeSpritesAnim && <Image src={pokeSpritesAnim.front_default} alt={`${context.copiaCarta.name}_front_image`} />}
                <div>
                    <button>Remover</button>
                    <button onClick={() => goToDetails(navigate)}>Ver Detalhes</button>
                </div>
            </Card>
        </DivPai>
    )
}

export default CardPokedex