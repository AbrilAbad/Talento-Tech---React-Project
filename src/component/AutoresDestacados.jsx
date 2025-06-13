import React from 'react';
import './styles/Autores.css';
import fondo from '../assets/fondoautores.jpg';

const AutoresDestacados = ({ autores }) => {
  return (
    <section className="autores-section" style={{backgroundImage: `url(${fondo})`}}>
      <h2 className="autores-titulo">Autores Destacados</h2>
      <br />
      <br />
      <div className="autores-grid">
        {autores.map((autor, index) => (
          <div key={index} className="autor-card">
            <h3>{autor.nombre}</h3>
            <p>{autor.biografia}</p>
            <p>{autor.genero}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AutoresDestacados;
