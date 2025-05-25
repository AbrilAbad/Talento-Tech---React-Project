import React from 'react';
import { Link } from 'react-router-dom';

const Productos = ({ producto, addToCart }) => {
  return (
    <div style={{
      display: "grid",
      gap: "1rem",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      marginTop: "1rem",
      padding: "1rem",
    }}>
      <div style={{
        border: "2px solid #585123",
        padding: "1.5rem",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: "rgb(249, 244, 234)",
        textAlign: "left",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        <h3 style={{ marginBottom: "0.5rem" }}>{producto.nombre}</h3>

        <p><strong>Género:</strong> {producto.genero}</p>
        <p><strong>Precio:</strong> ${producto.precio}</p>
        <p><strong>Stock:</strong> {producto.stock}</p>

        <Link to={`/catalogo/${producto.id}`}> Ver Sinopsis </Link>

        <button
          style={{marginTop: "0.8rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#585123",
            border: "none",
            color: "white",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "500",
            transition: "background-color 0.3s"
          }}
          onClick={() => addToCart(producto)}
          onMouseEnter={(e) => e.target.style.backgroundColor = "rgb(159, 147, 68)"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "#585123"}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default Productos;


