import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goBack } from './../Route/Coordinator';
import { DivPai, Bar, HeroContent, PhotoFront, PhotoBack, Stats, Types, Moves, Title, Text } from '../Styles/StyleDetails'
import BulbaBack from '../Styles/img/BulbaBack.png'
import BulbaFront from '../Styles/img/BulbaFront.png'

function PokemonDetails() {
    const navigate = useNavigate()

    return (
        <DivPai>
            <Bar>
                <button onClick={() => goBack(navigate)}>Voltar</button>
                <h1>Nome do Pokemon</h1>
                <button>Adicionar/Remover da Pokedex</button>
            </Bar>
            <HeroContent>
                <PhotoFront>
                    <img src={BulbaFront} alt="Foto de frente" />
                </PhotoFront>
                <PhotoBack>
                    <img src={BulbaBack} alt="Foto de tras" />
                </PhotoBack>
                <Stats>
                    <Title>
                        Stats
                    </Title>
                    <Text>
                        <p>HP: </p>
                    </Text>
                    <Text>
                        <p>Attack: </p>
                    </Text>
                    <Text>
                        <p>Defense: </p>
                    </Text>
                    <Text>
                        <p>Special-Attack: </p>
                    </Text>
                    <Text>
                        <p>Special-Defense: </p>
                    </Text>
                    <Text>
                        <p>Speed: </p>
                    </Text>
                </Stats>
                <Types>
                    <Title>
                        Tipos
                    </Title>
                    <Text>
                        <p>Tipo 1</p>
                    </Text>
                    <Text>
                        <p>Tipo 2</p>
                    </Text>
                </Types>

                <Moves>
                    <Title>
                        Principais Ataques
                    </Title>
                    <Text>
                        <p>Ataque 1</p>
                    </Text>
                    <Text>
                        <p>Ataque 2</p>
                    </Text>
                    <Text>
                        <p>Ataque 3</p>
                    </Text>
                    <Text>
                        <p>Ataque 4</p>
                    </Text>
                    <Text>
                        <p>Ataque 5</p>
                    </Text>
                </Moves>
            </HeroContent>
        </DivPai>
    )
}

export default PokemonDetails