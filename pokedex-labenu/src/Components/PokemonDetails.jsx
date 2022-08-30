import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goBack } from './../Route/Coordinator';

function PokemonDetails() {
    const navigate = useNavigate()

    return (
        <div>
            <div>
                <button onClick={() => goBack(navigate)}>Voltar</button>
                <h1>Nome do Pokemon</h1>
                <button>Adicionar/Remover da Pokedex</button>
            </div>
            <div>
                <img src="#" alt="Foto de frente" />
                <img src="#" alt="Foto de tras" />
                <div>
                    <h3>Stats</h3>
                    <div>
                        <p>HP: </p>
                        <span>#</span>
                    </div>
                    <div>
                        <p>Attack: </p>
                        <span>#</span>
                    </div>
                    <div>
                        <p>Defense: </p>
                        <span>#</span>
                    </div>
                    <div>
                        <p>Special-Attack: </p>
                        <span>#</span>
                    </div>
                    <div>
                        <p>Special-Defense: </p>
                        <span>#</span>
                    </div>
                    <div>
                        <p>Speed: </p>
                        <span>#</span>
                    </div>
                </div>
                <div>
                    <h3>Tipos:</h3>
                    <div>
                        <p>Tipo 1</p>
                        <p>Tipo 2</p>
                    </div>
                </div>
                <div>
                    <h3>Principais Ataques</h3>
                    <p>Ataque 1</p>
                    <p>Ataque 2</p>
                    <p>Ataque 3</p>
                    <p>Ataque 4</p>
                    <p>Ataque 5</p>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetails