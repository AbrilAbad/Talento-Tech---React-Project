import React from 'react';
import productos from "../utils/productos"
import ProductLista from './ProductLista';
import fondo from '../assets/fondocatalogo.jpg';

const Gallery = ({handleAddToCart}) => {
    return (
    <section style={{ padding: "2rem", backgroundImage: `url(${fondo})`, backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <h1 style={{ marginTop: "2rem", color: "rgb(254, 243, 220)", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', 
        textAlign: "center" }}>Catálogo</h1>
      <ProductLista productos={productos} addToCart={handleAddToCart}/>
    </section>
    )
  }
  
  export default Gallery;
