import React from 'react';
import './App.css';
import photo from './img/eu.png'

function App() {
  return (
    <div className="background">
      <div className="conteudo container">
      </div>
      <div className= "test">
        <img src={photo} alt="foto" className="rfoto"/>
        <i class="fab fa-instagram fa-3x"></i>
        </div>
    </div>
  );
}

export default App;
