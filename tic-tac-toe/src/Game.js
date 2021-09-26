import React, { useState } from 'react'
import Board from './Board'
import './board.css'

export default function Game() {

    const [tabuleiro, setTabuleiro] = useState([undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
    const [jogador, setJogador] = useState(false); // true -> bolinha / false -> xis / bolinha como padrão para iniciar

    const posicaoJaOcupada = (posicaoEscolhida) => {
        if(tabuleiro[posicaoEscolhida] !== undefined){
            alert('Sorry, but this field is already taken! Choose another.');
            return true;
        }
        return false;
    }

    const marcarPosicao = (posicaoEscolhida) => {

        if (posicaoJaOcupada(posicaoEscolhida)) return;

        let tabuleiro_aux = tabuleiro;
        tabuleiro_aux[posicaoEscolhida] = jogador;
        setTabuleiro(tabuleiro_aux);

        setJogador(jogadorAnterior => !jogadorAnterior);

        // Alterar a imagem do botão para representar a bolinha ou o xis, conforme o jogador que o escolheu
    }

    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-sm"></div>
                    <div class="col-sm">
                        <Board marcarPosicao={marcarPosicao}></Board>
                    </div>
                    <div class="col-sm"></div>
                </div>
            </div>
        </>
    );
}