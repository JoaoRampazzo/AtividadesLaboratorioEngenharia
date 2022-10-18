import React from 'react';

class Cores extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nome_cor: "Rosa",
            valor_cor: "#FF0084"
        };
    }
    changeColor = () =>{
        if(this.state.valor_cor == "#FF0084"){
            this.setState({nome_cor:"AZUL"});
            this.setState({valor_cor: "#00588F"});
        }
        else{
            this.setState({nome_cor:"Rosa"});
            this.setState({valor_cor:"#FF0084"});
        }
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

export default Cores;