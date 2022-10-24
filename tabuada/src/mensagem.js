import React from 'react';
class Mensagem extends React.Component{
    exibir(m){
        alert(m);
    }
    render(){
        return(
            <div>
                <button onClick={this.exibir.bind(this,"clicou!")}>Clica</button>
            </div>
        );
    };
}

export default Mensagem;

