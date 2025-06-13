import React, { useState } from 'react';
import './styles/Estilos.css';

const GaleriaGeneros = ({ generos }) => {
  const [generoActivo, setGeneroActivo] = useState(null);

  const cambiarColor = (generoSeleccionado) => {
    setGeneroActivo(generoSeleccionado);
  };

  return (
    <section className="galeria-generos">
      <h2 className="galeria-titulo">Explorá por género</h2>
      <div className="galeria-botones">
        {generos.map((genero, index) => (
          <button
            key={index}
            onClick={() => cambiarColor(genero)}
            className={`genero-btn ${generoActivo === genero ? 'activo' : ''}`}
          >
            {genero}
          </button>
        ))}
      </div>
    </section>
  );
};

export default GaleriaGeneros;
