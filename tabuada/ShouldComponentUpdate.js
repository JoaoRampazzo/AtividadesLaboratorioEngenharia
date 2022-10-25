import React from 'react';

class SH extends React.Component {
   constructor() {
      super();
      this.state = { cor: '#000' };
   }
   render() {
      return (
         <div>
            <h1 style={{ cor: this.state.cor }}>Tutorialspoint</h1>
            <button onClick={() => this.setState({ cor: '#ff0000' })}>
               Altera a cor
            </button>
            <MudaCor />
         </div>
      );
   }
}
class MudaCor extends React.Component {
   shouldComponentUpdate(nextProps) {
      if (nextProps.value !== this.props.value) {
         return true;
      } else {
         return false;
      }
   }
   render() {
      return (
         <div>
            <h1>FATEC</h1>
         </div>
      );
   }
}
export default SH;