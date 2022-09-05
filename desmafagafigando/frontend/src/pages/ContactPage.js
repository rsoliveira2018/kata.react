import React from 'react';

class ContactPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: '',
            corpo: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const inputFieldName = target.name;
        const inputFieldValue = target.value;

        this.setState({
            [inputFieldName]: inputFieldValue
        });
    }

    handleSubmit(event){
        this.postMessage('https://localhost:5001/mensagens/adicionar');
        event.preventDefault();
    }

    async postMessage(url = ''){

        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', JSON.stringify(data));
            alert('Success:', JSON.stringify(data));
        })
        .catch((error) => {
            console.log('Error:', JSON.stringify(error));
            alert('Error:', JSON.stringify(error));
        })

    }

    render(){
        
        return (
            <div className="formBox">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <h5>
                                Fale conosco!
                            </h5>
                            <p>
                                Deixe uma mensagem logo abaixo que lhe responderemos.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            Nome:
                            <input type="text" name="nome" placeholder="como deseja ser chamado?" className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="col-md-6">
                            E-mail:
                            <input type="text" name="email" placeholder="para onde vamos responder?" className="form-control" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            Mensagem:
                            <textarea name="corpo" placeholder="o que você tem a desmafagafigar?" className="form-control" value={this.state.value} onChange={this.handleChange} />
                            <br />
                            <input type="submit" className="btn btn-primary" value="Enviar" />
                        </div>
                    </div>
                    <hr />
                </form>
            </div>
        );
    }
}

export { ContactPage }