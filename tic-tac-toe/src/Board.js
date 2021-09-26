import React from 'react'
import Button from './Button'

export default function Board({ marcarPosicao }) {
    return(
        <div class="container">
            <div class="row">
                <div class="col-sm bordaSimples">
                    <Button marcarPosicao={marcarPosicao} indicePosicao={0}></Button>
                </div>
                <div class="col-sm bordaSimples">
                    <Button marcarPosicao={marcarPosicao} indicePosicao={1}></Button>
                </div>
                <div class="col-sm bordaSimples">
                    <Button marcarPosicao={marcarPosicao} indicePosicao={2}></Button>
                </div>
            </div>
            <div class="row">
                <div class="col-sm bordaSimples">
                    <Button marcarPosicao={marcarPosicao} indicePosicao={3}></Button>
                </div>
                <div class="col-sm bordaSimples">
                    <Button marcarPosicao={marcarPosicao} indicePosicao={4}></Button>
                </div>
                <div class="col-sm bordaSimples">
                    <Button marcarPosicao={marcarPosicao} indicePosicao={5}></Button>
                </div>
            </div>
            <div class="row">
                <div class="col-sm bordaSimples">
                    <Button marcarPosicao={marcarPosicao} indicePosicao={6}></Button>
                </div>
                <div class="col-sm bordaSimples">
                    <Button marcarPosicao={marcarPosicao} indicePosicao={7}></Button>
                </div>
                <div class="col-sm bordaSimples">
                    <Button marcarPosicao={marcarPosicao} indicePosicao={8}></Button>
                </div>
            </div>
        </div>
    )
}