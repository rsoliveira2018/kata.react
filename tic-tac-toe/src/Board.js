import React, { useState } from 'react'
import './board.css'

export default function Board() {

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
            <div>
                <table className="bordaSimples dimensaoPadrao centralizado">
                    <tr>
                        <td>
                            <button className="btn dimensaoPadrao" onClick={() => marcarPosicao(0)}></button>
                        </td>
                        <td>
                            <button className="btn dimensaoPadrao" onClick={() => marcarPosicao(1)}></button>
                        </td>
                        <td>
                            <button className="btn dimensaoPadrao" onClick={() => marcarPosicao(2)}></button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="btn dimensaoPadrao" onClick={() => marcarPosicao(3)}></button>
                        </td>
                        <td>
                            <button className="btn dimensaoPadrao" onClick={() => marcarPosicao(4)}></button>
                        </td>
                        <td>
                            <button className="btn dimensaoPadrao" onClick={() => marcarPosicao(5)}></button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="btn dimensaoPadrao" onClick={() => marcarPosicao(6)}></button>
                        </td>
                        <td>
                            <button className="btn dimensaoPadrao" onClick={() => marcarPosicao(7)}></button>
                        </td>
                        <td>
                            <button className="btn dimensaoPadrao" onClick={() => marcarPosicao(8)}></button>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    );
}