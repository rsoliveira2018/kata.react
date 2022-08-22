import React from 'react';

export default function Button({ marcarPosicao, indicePosicao, children }) {
  return (
    <button
      className="btn dimensaoPadrao"
      onClick={() => marcarPosicao(indicePosicao)}
    >
      {children}
    </button>
  );
}
