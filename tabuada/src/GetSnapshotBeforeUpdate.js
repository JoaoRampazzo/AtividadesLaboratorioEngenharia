import React from 'react';

class Snap extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         show: false,
      };
   }
   render() {
      return (
         <div>
            <h1>Lista de usuario</h1>
            <h3>Usuario: Joao</h3>
            <button onClick={() => this.setState({ show: true })}>
                
            </button>
            {this.state.show ? <Usuario email="joao@fatec.sp.gov.br" /> : null}
         </div>
      );
   }
}
class Usuario extends React.Component {
   constructor() {
      super();
      this.state = {
         email: 'JPedro@fatec.sp.gov.br',
      };
   }
   componentDidMount() {
      this.setState({ email: this.props.email });
   }
   getSnapshotBeforeUpdate(prevProps, prevState) {
      document.getElementById('anterior').innerHTML = 'Nome Anterior: ' + prevState.email;
   }
   componentDidUpdate() {
      
      document.getElementById('novo').innerHTML = 'Nome Atual: ' + this.state.email;
   }
   render() {
      return (
         <div>
            <div id="anterior">Previous Email: </div>
            <div id="novo">New Email: </div>
         </div>
      );
   }
}
export default Snap;