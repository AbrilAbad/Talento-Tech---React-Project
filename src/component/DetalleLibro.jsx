import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import { CarritoContext } from "../context/CarritoContext";

const DetalleLibro = () => {

  const {productos} = useContext (CarritoContext)
  const { id } = useParams();

  const libro = productos?.find(producto => producto.id === Number(id));

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Header />
        <Nav />
      </div>

      {libro ? (
        <section style={{
          backgroundColor: '#fef3dc',
          padding: '2rem',
          margin: '2rem auto',
          maxWidth: '700px',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          color: '#772f1a',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
          <h3>{libro.nombre}</h3>
          <p>por {libro.autor}</p>
          <p style={{ marginTop: '1rem' }}><strong>Sinopsis:</strong></p>
          <p>{libro.sinopsis}</p>
        </section>
      ) : (
        <p style={{ textAlign: 'center', color: 'gray', marginTop: '4rem' }}>
          Producto no encontrado.
        </p>
      )}


      <Footer />
    </>
  );
};

export default DetalleLibro;
