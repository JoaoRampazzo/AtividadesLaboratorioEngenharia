import React from 'react';

class Sh extends React.Component {
   constructor(props) {
      super(props);
      this.state = { color: '#000f' };
   }
   render() {
      return (
         <div>
            <h1 style={{ color: this.state.color }}>FATEC</h1>
            <button onClick={() => this.setState({ color: '#00588F' })}>
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
            <h1>fatec</h1>
         </div>
      );
   }
}
export default Sh;