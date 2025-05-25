import React from 'react';

const Carrito = ({ carritoItems, handleRemoveFromCart }) => {
  // Calcular el total
  const total = carritoItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <section style={{
      backgroundColor: "rgb(254, 243, 220)",
      padding: "2rem",
      margin: "2rem auto",
      borderRadius: "10px",
      maxWidth: "600px",
      boxShadow: "0 4px 8px rgb(108, 100, 47)"
    }}>
      <h2 style={{ color: "#772f1a", marginBottom: "1rem" }}>Carrito de Compras</h2>
      {carritoItems.length === 0 ? (
        <p style={{ color: "#777" }}>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {carritoItems.map((item, index) => (
              <li key={index} style={{
                backgroundColor: "#fff",
                padding: "0.75rem 1rem",
                marginBottom: "0.5rem",
                borderRadius: "5px",
                border: "1px solid #ddd",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                <span>
                  {item.nombre} - ${item.precio} x {item.cantidad}
                </span>
                <button
                  onClick={() => handleRemoveFromCart(item)}
                  style={{
                    backgroundColor: '#a44a3f',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    alignSelf: 'flex-end',
                  }}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div style={{
            marginTop: "1.5rem",
            padding: "1rem",
            backgroundColor: "#fff5e6",
            borderRadius: "5px",
            border: "1px solid #e0c897",
            textAlign: "right",
            fontWeight: "bold",
            fontSize: "1.1rem",
            color: "#585123"
          }}>
            Total: ${total.toFixed(2)}
          </div>
        </>
      )}
    </section>
  );
};

export default Carrito;
