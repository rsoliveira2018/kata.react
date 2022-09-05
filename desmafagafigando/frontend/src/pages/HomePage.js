import React from 'react';

class HomePage extends React.Component {
    render(){
        return(
            <>
                <div className="homePageIntro centered">
                    Se liga nas nossas últimas desmafagafigadas e junte-se a nós nas próximas:
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100 mainImages" src="../imgs/slides/horto.jpg" alt="Horto de Piracicaba - SP" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>
                                            Horto Florestal de Piracicaba
                                        </h5>
                                        <p>
                                            Caminhada tradicional de sábado. Com saída ainda durante a madrugada, fazemos o bate-volta no Horto de Piracicaba, totalizando 25km.
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 mainImages" src="../imgs/slides/saopedro.jpg" alt="Serra de São Pedro - SP" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>
                                            Serra de São Pedro - SP
                                        </h5>
                                        <p>
                                            Caminhada de 30km pela Serra de São Pedro até chega ao Cruzeiro do Facão para acampamento. Retorno na manhã seguinte.
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 mainImages" src="../imgs/slides/picolopo.jpg" alt="Serra do Lopo - Joanópolis - SP" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>
                                            Pico do Lopo - Joanópolis - SP / Extrema - MG
                                        </h5>
                                        <p>
                                            Saindo de Joanópolis - SP em direção à Extrema - MG. Nessa caminhada fizemos cerca de 20km na ida, com direito a passagem por pasto, morros e rios.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export { HomePage }