import React from 'react';

class Mensagem extends React.Component{
    exibir(props){
        super(props);
        this.state = {
            nome_cor: "Rosa",
            valor_cor: "#FF0084"
        };
    }
    render(){
        return(
            <div>
                <h1 style={{color:this.state.valor_cor}}>cor: {this.state.nome_cor}</h1>
                <button type="button" onClick={this.changeColor}>Botão</button>
            </div>
        );
    };
}

export default Mensagem;

