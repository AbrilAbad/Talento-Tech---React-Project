import React from 'react';
import { Link } from 'react-router-dom';
import './styles/productosEstilos.css';

const Productos = ({ producto, addToCart }) => {
  return (
    <div className="product-grid">
      <div className="product-card">
        <h3>{producto.nombre}</h3>

        <p><strong>Género:</strong> {producto.genero}</p>
        <p><strong>Precio:</strong> ${producto.precio}</p>
        <p><strong>Stock:</strong> {producto.stock}</p>

        <Link className="sinopsis-link" to={`/catalogo/${producto.id}`}>
          Ver Sinopsis
        </Link>
        <br />
        
        <button
          className="btn btn-add"
          onClick={() => addToCart(producto)}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default Productos;
