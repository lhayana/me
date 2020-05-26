import React from 'react';
import './App.css';
import photo from './img/eu.png'

function App() {
  return (
    <div className="background">
      <div className="conteudo container">
        <img src={photo} alt="foto" className="rfoto"/>
        <h1 className="nome">Lhayana Vieira</h1>
        <div class="btn-group botoes" role="group" aria-label="socialmedia">
          <a href="https://github.com/lhayana" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary btn-dark"><i class="fab fa-github fa-2x"></i> </button></a>   
          <a href="https://www.linkedin.com/in/lhayana/" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary btn-dark"><i class="fab fa-linkedin fa-2x"></i></button> </a>   
          <a href="https://twitter.com/lhayanavm" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary btn-dark"><i class="fab fa-twitter fa-2x"></i></button> </a>   
          <a href="https://www.facebook.com/lhayana" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary btn-dark"><i class="fab fa-facebook fa-2x"></i></button> </a>   
          <a href="https://www.instagram.com/lhayana/" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary btn-dark"><i class="fab fa-instagram fa-2x"></i></button> </a>   
        </div>
        </div>
        </div>
  );
}

export default App;
