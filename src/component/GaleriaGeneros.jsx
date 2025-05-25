import React, { useState } from 'react';

const GaleriaGeneros = ({ generos }) => {
  const [generoActivo, setGeneroActivo] = useState(null);

  const cambiarColor = (generoSeleccionado) => {
    setGeneroActivo(generoSeleccionado);
  };

  return (
    <section style={{ padding: "2rem", borderRadius: "12px" }}>
      <h2 style={{ color: "#772f1a", textAlign: "center", marginBottom: "1rem" }}>
        Explorá por género
      </h2>
      <br />
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        {generos.map((genero, index) => (
          <button
            key={index}
            onClick={() => cambiarColor(genero)}
            style={{
              padding: "0.6rem 1.2rem",
              borderRadius: "20px",
              border: "2px solid #585123",
              backgroundColor: generoActivo === genero ? "#772f1a" : "#fff",
              color: generoActivo === genero ? "#fff" : "#333",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          >
            {genero}
          </button>
        ))}
      </div>
    </section>
  );
};

export default GaleriaGeneros;
