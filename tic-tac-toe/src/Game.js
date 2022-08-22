import React, { useState, createRef } from 'react';
import { useScreenshot } from 'use-react-screenshot';
import Board from './Board';
import Camera from './Camera';
import './board.css';

export default function Game() {
  const [tabuleiro, setTabuleiro] = useState([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  ]);
  const [jogador, setJogador] = useState(true); // true -> bolinha / false -> xis / bolinha como padrão para iniciar
  const [vencedor, setVencedor] = useState(undefined);
  const [bolinhaScore, setBolinhaScore] = useState(0);
  const [xisScore, setXisScore] = useState(0);
  const ref = createRef(null);
  const [screenshot, setScreenshot] = useScreenshot();

  const takeScreenshot = () => {
    setScreenshot(ref.current);
    downloadImage();
  };

  const downloadImage = () => {
    fetch(screenshot, {
      method: 'GET',
      headers: {}
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'image.png');
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const posicaoJaOcupada = (posicaoEscolhida) => {
    if (tabuleiro[posicaoEscolhida] !== undefined) {
      alert('Sorry, but this field is already taken! Choose another.');
      return true;
    }
    return false;
  };

  const restartGame = () => {
    setTabuleiro([
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    ]);
    setVencedor(undefined);
    setJogador(true);
  };

  const resetGame = () => {
    restartGame();
    setBolinhaScore(0);
    setXisScore(0);
  };

  const isTheGameOver = () => {
    /* [   0   ] [   1   ] [   2   ]
           [   3   ] [   4   ] [   5   ]
           [   6   ] [   7   ] [   8   ] */

    if (
      (tabuleiro[0] && tabuleiro[1] && tabuleiro[2]) ||
      (tabuleiro[3] && tabuleiro[4] && tabuleiro[5]) ||
      (tabuleiro[6] && tabuleiro[7] && tabuleiro[8]) ||
      (tabuleiro[0] && tabuleiro[3] && tabuleiro[6]) ||
      (tabuleiro[1] && tabuleiro[4] && tabuleiro[7]) ||
      (tabuleiro[2] && tabuleiro[5] && tabuleiro[8]) ||
      (tabuleiro[0] && tabuleiro[4] && tabuleiro[8]) ||
      (tabuleiro[2] && tabuleiro[4] && tabuleiro[6])
    ) {
      setVencedor(true); // Bolinha venceu
      setBolinhaScore((prevBolinhaScore) => prevBolinhaScore + 1);
      restartGame();
      return true;
    }

    if (
      (tabuleiro[0] === false &&
        tabuleiro[1] === false &&
        tabuleiro[2] === false) ||
      (tabuleiro[3] === false &&
        tabuleiro[4] === false &&
        tabuleiro[5] === false) ||
      (tabuleiro[6] === false &&
        tabuleiro[7] === false &&
        tabuleiro[8] === false) ||
      (tabuleiro[0] === false &&
        tabuleiro[3] === false &&
        tabuleiro[6] === false) ||
      (tabuleiro[1] === false &&
        tabuleiro[4] === false &&
        tabuleiro[7] === false) ||
      (tabuleiro[2] === false &&
        tabuleiro[5] === false &&
        tabuleiro[8] === false) ||
      (tabuleiro[0] === false &&
        tabuleiro[4] === false &&
        tabuleiro[8] === false) ||
      (tabuleiro[2] === false &&
        tabuleiro[4] === false &&
        tabuleiro[6] === false)
    ) {
      setVencedor(false); // Xis venceu
      setXisScore((prevXisScore) => prevXisScore + 1);
      restartGame();
      return true;
    }

    if (
      tabuleiro[0] !== undefined &&
      tabuleiro[1] !== undefined &&
      tabuleiro[2] !== undefined &&
      tabuleiro[3] !== undefined &&
      tabuleiro[4] !== undefined &&
      tabuleiro[5] !== undefined &&
      tabuleiro[6] !== undefined &&
      tabuleiro[7] !== undefined &&
      tabuleiro[8] !== undefined
    ) {
      restartGame();
      return true;
    }
    return false;
  };

  const marcarPosicao = (posicaoEscolhida) => {
    if (posicaoJaOcupada(posicaoEscolhida)) return;

    let tabuleiro_aux = tabuleiro;
    tabuleiro_aux[posicaoEscolhida] = jogador;
    setTabuleiro(tabuleiro_aux);

    setJogador((jogadorAnterior) => !jogadorAnterior);

    isTheGameOver();
  };

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm" ref={ref}>
            <Board
              marcarPosicao={marcarPosicao}
              tabuleiro={tabuleiro}
              vencedor={vencedor}
            ></Board>
            <div class="row">
              <div class="col-sm">
                <button className="btn btn-danger dimensaoPadrao botaoEsquerdo fontePlacar botaoDesativado">
                  {bolinhaScore}
                </button>
              </div>
              <div class="col-sm centralizado">
                <div class="row">
                  <div class="col-sm">
                    <button
                      className="btn btn-warning meiaDimensaoPadrao botaoCentral"
                      onClick={resetGame}
                    >
                      Reset ?
                    </button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    <button
                      className="btn btn-secondary meiaDimensaoPadrao botaoCentral centralizado"
                      onClick={takeScreenshot}
                    >
                      <Camera></Camera>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm">
                <button className="btn btn-primary dimensaoPadrao botaoDireito fontePlacar botaoDesativado">
                  {xisScore}
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm"></div>
        </div>
      </div>
    </>
  );
}
