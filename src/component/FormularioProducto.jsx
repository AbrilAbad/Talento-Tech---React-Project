import React, { useState } from 'react';
import './styles/Formulario.css';

const FormularioProducto = ({ onAgregar }) => {
  const [producto, setProducto] = useState({
    nombre: '',
    autor: '',
    precio: '',
    genero: '',
    stock: '',
    sinopsis: ''
  });

  const [errorPrecio, setErrorPrecio] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });

    if (name === 'precio') {
      const precio = parseFloat(value);
      if (isNaN(precio) || precio <= 0) {
        setErrorPrecio('El precio debe ser mayor a 0');
      } else {
        setErrorPrecio('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const precio = parseFloat(producto.precio);
    if (isNaN(precio) || precio <= 0) {
      setErrorPrecio('El precio debe ser mayor a 0');
      return;
    }

    setErrorPrecio('');
    onAgregar(producto);

    setProducto({
      nombre: '',
      autor: '',
      precio: '',
      genero: '',
      stock: '',
      sinopsis: ''
    });
  };

  return (
    <div className="formulario-container">
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Agregar Nuevo Producto</h2>
      <form onSubmit={handleSubmit} className="formulario-form">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={producto.nombre}
          onChange={handleChange}
          className="formulario-input"
          required
        />
        <input
          type="text"
          name="autor"
          placeholder="Autor"
          value={producto.autor}
          onChange={handleChange}
          className="formulario-input"
          required
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={producto.precio}
          onChange={handleChange}
          className="formulario-input"
          required
        />
        {errorPrecio && (
          <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '-1rem', marginBottom: '1rem' }}>
            {errorPrecio}
          </p>
        )}
        <input
          type="text"
          name="genero"
          placeholder="Género"
          value={producto.genero}
          onChange={handleChange}
          className="formulario-input"
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={producto.stock}
          onChange={handleChange}
          className="formulario-input"
          required
        />
        <textarea
          name="sinopsis"
          placeholder="Sinopsis"
          value={producto.sinopsis}
          onChange={handleChange}
          className="formulario-input"
          style={{ height: '100px', resize: 'vertical' }}
        />
        <button type="submit" className="formulario-boton">Agregar Producto</button>
      </form>
    </div>
  );
};

export default FormularioProducto;
