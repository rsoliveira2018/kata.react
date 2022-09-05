import React from 'react';
import { Relato } from '../components/Relato';

class StoriesPage extends React.Component {
    render(){

        const relato01 = {
            imagem: [
                "https://picsum.photos/200/197",
                "https://picsum.photos/200/198",
                "https://picsum.photos/200/199",
            ],
            titulo: "Acampamento Serra de São Pedro - SP",
            subTitulo: "Caminhada de 30km só de ida para acampar no Cruzeiro do Facão",
            participantes: ""
        };

        const relato02 = {
            imagem: [
                "https://picsum.photos/200/200",
                "https://picsum.photos/200/201",
                "https://picsum.photos/200/202",
            ],
            titulo: "Acampamento na Serra do Lopo em Joanópolis - SP",
            subTitulo: "20 km pela Serra do Lopo em pleno Halloween de 2020",
            participantes: ""
        };

        const relatos = [relato01, relato02];

        let relatosAExibir = [];
        relatos.forEach((relato) => {
            relatosAExibir.push(
                <div className="col-md-12">
                    <Relato relato={relato} />
                </div>
            );
        });

        return (
            <div className="row relatoBox">
                <div className="col-md-12">
                    <div className="row">
                        {relatosAExibir}
                    </div>
                </div>
            </div>
        );
    }
}

export { StoriesPage }