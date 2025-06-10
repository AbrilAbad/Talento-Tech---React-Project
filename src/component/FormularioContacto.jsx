import React, { useState } from 'react';
import './styles/Formulario.css';

const FormularioContacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado con éxito!');
    setFormulario({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  return (
    <section className="formulario-container">
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Contacto</h2>
      <form onSubmit={handleSubmit} className="formulario-form">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formulario.nombre}
          onChange={handleChange}
          required
          className="formulario-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formulario.email}
          onChange={handleChange}
          required
          className="formulario-input"
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={formulario.telefono}
          onChange={handleChange}
          className="formulario-input"
        />
        <textarea
          name="mensaje"
          placeholder="Escribí tu consulta..."
          value={formulario.mensaje}
          onChange={handleChange}
          required
          rows={4}
          className="formulario-input"
          style={{ resize: 'none' }}
        />
        <button type="submit" className="formulario-boton">Enviar</button>
      </form>
    </section>
  );
};

export default FormularioContacto;
