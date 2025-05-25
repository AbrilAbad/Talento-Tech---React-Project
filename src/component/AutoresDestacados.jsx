import React from 'react';
import fondoautores from '../assets/fondoautores.jpg';

const AutoresDestacados = ({ autores }) => {
  return (
    <section style={{ backgroundImage: `url(${fondoautores})`, 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize:'contain',
      height: '550px', 
      padding: "5rem" }}>
      <h2 style={{ color: "#772f1a",
      marginBottom: "1rem",
      padding: '0.4rem 1rem',
      backgroundColor: 'rgba(254, 243, 220, 0.53)',
      display: 'inline-block',
      borderRadius: '7px',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)'}}>Autores Destacados</h2>
      <br />
      <br />
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
        {autores.map((autor, index) => (
          <div
            key={index}
            style={{
              border: "2px solid #772f1a",
              borderRadius: "12px",
              padding: "1rem",
              width: "220px",
              textAlign: "center",
              backgroundColor: "#a44a3f",
              color: "rgb(254, 243, 220)",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ color: "#fef3dc", margin: "0.5rem 0", fontWeight: "bold" }}>{autor.nombre}</h3>
            <p style={{ fontStyle: "italic", color: "#fef3dc" }}>{autor.biografia}</p>
            <p style={{ fontStyle: "italic", color: "#fef3dc" }}>{autor.genero}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AutoresDestacados;
