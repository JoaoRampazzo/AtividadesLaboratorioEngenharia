import React from 'react';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Tabuada from './Tabuada';
import Cores from './Cores';
import Mensagem from './Mensagem';
import Header from './Header';



let n = prompt("Digite um numero", "5") 
function App() {
  return (
   /* <div>
      <Cores />
      <Titulo titulo = "Fatec"
              texto = "Faculdade de Tecnologia de Presidente Prudente"
              link = "https://www.fatecsp.edu.br"/>
      <Titulo2 />
      <Tabuada numero = {n}/>*/
    <div>
      <Mensagem></Mensagem>

      <Header favcol="Azul"></Header>
    </div>

  );


  
  
  
}

export default App;
