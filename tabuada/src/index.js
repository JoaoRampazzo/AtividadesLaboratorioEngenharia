import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TodoList from './TodoList';
import Contador from './Contador';
import reportWebVitals from './reportWebVitals';


const Item1 = {
  id:Date.now(),
  text: "Item 1"
}

const Item2 = {
  id: Date.now(),
  text: "Item 2"
}

var itens = [Item1, Item2];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TodoList itens={itens}/>

    <Contador></Contador>
  </React.StrictMode>


);
reportWebVitals();
