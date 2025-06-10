import React from 'react';
import libreria from '../assets/library.png';
import GaleriaGeneros from './GaleriaGeneros';
import generos from "../../public/utils/generos";

const Main = () => {

  const manejarClick = () => {
    console.log(`Explorando: ${titulo}`);
  };

  return (
    <main>

      <section style={{
        backgroundImage: `url(${libreria})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '400px',
        padding: '6rem 2rem',
      }}>
        <h1 style={{
          textAlign: 'center',
          color: 'rgb(212, 113, 83)',
          fontSize: '2rem',
          marginBottom: '2rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        }}>
          Bienvenido a Letras de Calabaza
        </h1>
        <p style={{
          textAlign: 'center',
          color: 'rgb(212, 113, 83)',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        }}>Tu rincón literario donde los libros cobran vida </p>
        <p style={{
          textAlign: 'center',
          color: 'rgb(212, 113, 83)',
          marginBottom: '2rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        }}>Explora nuestra colección y encuentra tu próxima aventura entre páginas</p>

      </section>

      <section style={{ padding: "2rem" }}>
        <GaleriaGeneros generos={generos} />
      </section>

      <section style={{
        marginBottom: '3rem', border: '2px solid #772f1a',
        padding: '2rem',
        marginLeft: '20rem',
        marginRight: '20rem',           
        borderRadius: '10px',
      }}>
        <h2 style={{ color: "#772f1a", textAlign: "center", marginBottom: "1rem" }}>
          Colección Otoño
        </h2>
        <p style={{ color: "#772f1a", textAlign: "center", marginBottom: "1rem" }}>
          Libros cálidos, mágicos y misteriosos para leer entre hojas secas
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <button onClick={manejarClick}
            style={{
              backgroundColor: "#585123",
              color: "white",
              border: "none",
              padding: "1rem 2rem",
              borderRadius: "5px",
              cursor: "pointer",
            }}>
            Explorar colección
          </button>
        </div>
      </section>

    </main>
  );
};

export default Main;

