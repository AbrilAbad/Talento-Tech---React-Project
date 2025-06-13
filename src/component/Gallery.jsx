import React, { useContext } from 'react';
import ProductLista from './ProductLista';
import fondo from '../assets/fondocatalogo.jpg';
import { CarritoContext } from '../context/CarritoContext';
import './styles/Estilos.css';

const Gallery = () => {
  const { handleAddToCart, productosFiltrados, busqueda, setBusqueda } = useContext(CarritoContext);

  return (
    <section
      className="gallery-section"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <h1 className="gallery-title">Catálogo</h1>
      <input
        className="gallery-input"
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <ProductLista productos={productosFiltrados} addToCart={handleAddToCart} />
    </section>
  );
};

export default Gallery;
