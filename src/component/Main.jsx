import React from 'react';
import libreria from '../assets/library.png';
import GaleriaGeneros from './GaleriaGeneros';
import generos from '../../public/utils/generos';
import './styles/Estilos.css';

const Main = () => {

  return (
    <main>
      <section className="main-hero" style={{ backgroundImage: `url(${libreria})` }}>
        <h1 className="main-title">Bienvenido a Letras de Calabaza</h1>
        <p className="main-subtitle">Tu rincón literario donde los libros cobran vida</p>
        <p className="main-subtitle">Explora nuestra colección y encuentra tu próxima aventura entre páginas</p>
      </section>

      <section className="main-generos">
        <GaleriaGeneros generos={generos} />
      </section>

      <section className="main-coleccion">
        <h2 className="coleccion-titulo">Colección Otoño</h2>
        <p className="coleccion-subtitulo">
          Libros cálidos, mágicos y misteriosos para leer entre hojas secas
        </p>
        <div className="coleccion-boton-contenedor">
          <button className="coleccion-boton">
            Explorar colección
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;
