import React from 'react'
import Bolinha from './Bolinha'
import Xis from './Xis'

export default function Button({ marcarPosicao, indicePosicao }) {
    return(
        <button className="btn dimensaoPadrao" onClick={() => marcarPosicao(indicePosicao)}>
            {/* <Bolinha /> */}
            <Xis />
        </button>
    )
}