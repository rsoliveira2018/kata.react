import React, { useState } from 'react'
import Board from './Board'
import './board.css'

export default function Game() {

    const [tabuleiro, setTabuleiro] = useState([undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
    const [jogador, setJogador] = useState(true); // true -> bolinha / false -> xis / bolinha como padrão para iniciar
    const [vencedor, setVencedor] = useState(undefined);

    const posicaoJaOcupada = (posicaoEscolhida) => {
        if(tabuleiro[posicaoEscolhida] !== undefined){
            alert('Sorry, but this field is already taken! Choose another.');
            return true;
        }
        return false;
    }

    const isTheGameOver = () => {

        /* [   0   ] [   1   ] [   2   ]
           [   3   ] [   4   ] [   5   ]
           [   6   ] [   7   ] [   8   ] */

        if(
            (tabuleiro[0] && tabuleiro[1] && tabuleiro[2]) ||
            (tabuleiro[3] && tabuleiro[4] && tabuleiro[5]) ||
            (tabuleiro[6] && tabuleiro[7] && tabuleiro[8]) ||
            (tabuleiro[0] && tabuleiro[3] && tabuleiro[6]) ||
            (tabuleiro[1] && tabuleiro[4] && tabuleiro[7]) ||
            (tabuleiro[2] && tabuleiro[5] && tabuleiro[8]) ||
            (tabuleiro[0] && tabuleiro[4] && tabuleiro[8]) ||
            (tabuleiro[2] && tabuleiro[4] && tabuleiro[6])){
            setVencedor(true); // Bolinha venceu
            return true;
        }

        if(
            (tabuleiro[0] === false && tabuleiro[1] === false && tabuleiro[2] === false) ||
            (tabuleiro[3] === false && tabuleiro[4] === false && tabuleiro[5] === false) ||
            (tabuleiro[6] === false && tabuleiro[7] === false && tabuleiro[8] === false) ||
            (tabuleiro[0] === false && tabuleiro[3] === false && tabuleiro[6] === false) ||
            (tabuleiro[1] === false && tabuleiro[4] === false && tabuleiro[7] === false) ||
            (tabuleiro[2] === false && tabuleiro[5] === false && tabuleiro[8] === false) ||
            (tabuleiro[0] === false && tabuleiro[4] === false && tabuleiro[8] === false) ||
            (tabuleiro[2] === false && tabuleiro[4] === false && tabuleiro[6] === false)){
            setVencedor(false); // Xis venceu
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

        isTheGameOver();
    }

    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-sm"></div>
                    <div class="col-sm">
                        <Board marcarPosicao={marcarPosicao} tabuleiro={tabuleiro} vencedor={vencedor}></Board>
                    </div>
                    <div class="col-sm"></div>
                </div>
            </div>
        </>
    );
}