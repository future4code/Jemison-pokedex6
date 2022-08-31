import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goBack } from './../Route/Coordinator';
import { DivPai, Bar, HeroContent, PhotoFront, PhotoBack, Stats, Types, Moves, Title, Text } from '../Styles/StyleDetails'

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
                    <img src="#" alt="Foto de frente" />
                </PhotoFront>
                <PhotoBack>
                    <img src="#" alt="Foto de tras" />
                </PhotoBack>
                <Stats>
                    <Title>
                        <h3>Stats</h3>
                    </Title>
                    <Text>
                        <li>HP: </li>
                        <li>Attack: </li>
                        <li>Defense: </li>
                        <li>Special-Attack: </li>
                        <li>Special-Defense: </li>
                        <li>Speed: </li>
                    </Text>
                </Stats>
                <Types>
                    <Title>
                        <h3>Tipos:</h3>
                    </Title>
                    <Text>
                        <li>Tipo 1</li>
                        <li>Tipo 2</li>
                    </Text>
                </Types>
                <Moves>
                    <Title>
                        <h3>Principais Ataques</h3>
                    </Title>
                    <Text>
                        <li>Ataque 1</li>
                        <li>Ataque 2</li>
                        <li>Ataque 3</li>
                        <li>Ataque 4</li>
                        <li>Ataque 5</li>
                    </Text>
                </Moves>
            </HeroContent>
        </DivPai>
    )
}

export default PokemonDetails