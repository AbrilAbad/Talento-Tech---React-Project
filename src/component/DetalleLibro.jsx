import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import { CarritoContext } from "../context/CarritoContext";
import './styles/Estilos.css';
import '../layout/styles/HeaderNav.css';

const DetalleLibro = () => {
  const { productos } = useContext(CarritoContext);
  const { id } = useParams();
  const libro = productos?.find(producto => producto.id === Number(id));

  return (
    <>
      <div className="header-nav">
        <Header />
        <Nav />
      </div>

      {libro ? (
        <section className="detalle-libro">
          <h3>{libro.nombre}</h3>
          <p>por {libro.autor}</p>
          <p className="detalle-subtitulo"><strong>Sinopsis:</strong></p>
          <p>{libro.sinopsis}</p>
        </section>
      ) : (
        <p className="detalle-error">Producto no encontrado.</p>
      )}

      <Footer />
    </>
  );
};

export default DetalleLibro;
