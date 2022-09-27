import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://www.fatecpp.edu.br/wp-content/uploads/2020/10/Img1-1.jpg"} className="App-logo" alt="logo" />
        <p>
          inscreva-se no vestibular da Fatec 
        </p>
        <a
          className="App-link"
          href="https://www.vestibularfatec.com.br/home/"
          target="_blank"
          rel="noopener noreferrer" >Vestibular Fatec </a>

      </header>

      <div class="centrar">
      <div class="bloco">
          <h1 class="pt-4">cursos da fatec</h1>
          <ul>
          <li> <a href="https://www.vestibularfatec.com.br/unidades-cursos/curso.asp?c=75"> Agronegocio </a> </li>
          <li> <a href="https://www.vestibularfatec.com.br/unidades-cursos/curso.asp?c=194"> Analise e Desenvolvimento de Sistemas </a> </li>
          <li> <a href="https://www.vestibularfatec.com.br/unidades-cursos/curso.asp?c=259"> Marketing </a> </li>
          <li> <a href="https://www.vestibularfatec.com.br/unidades-cursos/curso.asp?c=163"> eventos </a> </li>
        </ul>     
      </div>

      </div>
    </div>
  );
}

export default App;
