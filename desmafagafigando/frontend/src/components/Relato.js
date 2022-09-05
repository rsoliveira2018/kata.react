import React from 'react';

class Relato extends React.Component {
    render() {
        return (
            <div className="relato">
                <div className="relatoTexto">
                    <div className="relatoTitulo">
                        {this.props.relato.titulo}
                    </div>
                    <div className="relatoSubTitulo">
                        {this.props.relato.subTitulo}
                    </div>
                    <div className="relatoParticipantes">
                        {this.props.relato.participantes}
                    </div>
                </div>
                <img className="relatoImagem" src={this.props.relato.imagem[0]} alt="relato" />
                <img className="relatoImagem" src={this.props.relato.imagem[1]} alt="relato" />
                <img className="relatoImagem" src={this.props.relato.imagem[2]} alt="relato" />
            </div>
        );
    }
}

export { Relato }