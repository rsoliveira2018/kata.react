import React from 'react'
import Button from './Button'
import Bolinha from './Bolinha'
import Xis from './Xis'

export default function Board({ marcarPosicao, tabuleiro }) {

    const definirFormaExibida = (indicePosicao) => {
        if(tabuleiro[indicePosicao] === true)
        {
            return <Bolinha />
        }
        else if (tabuleiro[indicePosicao] === false) {
            return <Xis />
        }
    }

    return(
        <div class="container">
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
        </div>
    )
}