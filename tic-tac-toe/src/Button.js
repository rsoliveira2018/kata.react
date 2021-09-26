import React from 'react'

export default function Button({ marcarPosicao, indicePosicao }) {
    return(
        <button className="btn dimensaoPadrao" onClick={() => marcarPosicao(indicePosicao)}></button>
    )
}