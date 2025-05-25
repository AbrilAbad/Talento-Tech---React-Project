import React from "react";

const TarjetaProyecto = ({ titulo, descripcion, botonTexto }) => {
  const manejarClick = () => {
    alert("¡Has hecho clic en el botón!");
  };

  return (
    <div style={{
      backgroundColor: '#fef3dc',
      padding: '2rem',
      margin: '2rem auto',
      maxWidth: '600px',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      color: '#772f1a',
      textAlign: 'center',
    }}>
      <h3 style={{ marginBottom: '1rem' }}>{titulo}</h3>
      <p style={{ marginBottom: '1.5rem' }}>{descripcion}</p>
      <button 
        onClick={manejarClick}
        style={{
          backgroundColor: '#a44a3f',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        {botonTexto}
      </button>
    </div>
  );
};

export default TarjetaProyecto;
