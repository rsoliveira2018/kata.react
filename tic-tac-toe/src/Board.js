import React from 'react'
import Button from './Button'
import Bolinha from './Bolinha'
import Xis from './Xis'

export default function Board({ marcarPosicao, tabuleiro, vencedor }) {

    const definirFormaExibida = (indicePosicao) => {
        if(tabuleiro[indicePosicao] === true)
        {
            return <Bolinha />
        }
        else if (tabuleiro[indicePosicao] === false) {
            return <Xis />
        }
    }

    let gameIsOver = (vencedor === undefined) ? {"pointer-events": "auto"} : {"pointer-events": "none"}

    let nomeVencedor = ""
    if(!(vencedor === undefined)){
        if(vencedor === true){
            nomeVencedor = "BOLINHA"
        } else {
            nomeVencedor = "XIS"
        }
    }

    return(
        <div class="container" style={gameIsOver}>
            <div class="row">
                <div class="col-sm bordaSimples">
                    <Button marcarPosicao={marcarPosicao} indicePosicao={0}>
                        {definirFormaExibida(0)}
                    </Button>
                </div>
                <div class="col-sm bordaSimples">
                    <Button marcarPosicao={marcarPosicao} indicePosicao={1}>
                        {definirFormaExibida(1)}
                    </Button>
                </div>
                <div class="col-sm bordaSimples">
                    <Button marcarPosicao={marcarPosicao} indicePosicao={2}>
                        {definirFormaExibida(2)}
                    </Button>
                </div>
            </div>
            <div class="row">
                <div class="col-sm bordaSimples">
                    <Button marcarPosicao={marcarPosicao} indicePosicao={3}>
                        {definirFormaExibida(3)}
                    </Button>
                </div>
                <div class="col-sm bordaSimples">
                    <Button marcarPosicao={marcarPosicao} indicePosicao={4}>
                        {definirFormaExibida(4)}
                    </Button>
                </div>
                <div class="col-sm bordaSimples">
                    <Button marcarPosicao={marcarPosicao} indicePosicao={5}>
                        {definirFormaExibida(5)}
                    </Button>
                </div>
            </div>
            <div class="row">
                <div class="col-sm bordaSimples">
                    <Button marcarPosicao={marcarPosicao} indicePosicao={6}>
                        {definirFormaExibida(6)}
                    </Button>
                </div>
                <div class="col-sm bordaSimples">
                    <Button marcarPosicao={marcarPosicao} indicePosicao={7}>
                        {definirFormaExibida(7)}
                    </Button>
                </div>
                <div class="col-sm bordaSimples">
                    <Button marcarPosicao={marcarPosicao} indicePosicao={8}>
                        {definirFormaExibida(8)}
                    </Button>
                </div>
            </div>
            <div class="row">
            <div class="col-sm">
                
            </div>
            <div class="col-sm">
                O vencedor foi <h4>{nomeVencedor}</h4>
            </div>
            <div class="col-sm">
                
            </div>
            </div>
        </div>
    )
}