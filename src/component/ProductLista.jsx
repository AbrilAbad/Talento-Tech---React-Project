import React from 'react';
import Productos from './Productos';

const ProductLista = ({ productos, addToCart }) => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1.5rem",
      marginTop: "2rem"
    }}>
      {productos.map((producto, index) => (
        <Productos key={index} producto={producto} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductLista;

