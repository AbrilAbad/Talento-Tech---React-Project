import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import './styles/Estilos.css';

const Carrito = () => {
  const { cart, handleRemoveFromCart } = useContext(CarritoContext);
  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <section className="carrito-container">
      <h2 className="carrito-titulo">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="carrito-vacio">Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="carrito-lista">
            {cart.map((item, index) => (
              <li key={index} className="carrito-item">
                <span>{item.nombre} - ${item.precio} x {item.cantidad}</span>
                <button
                  className="btn btn-remove"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="carrito-total">
            Total: ${total.toFixed(2)}
          </div>
        </>
      )}
    </section>
  );
};

export default Carrito;
