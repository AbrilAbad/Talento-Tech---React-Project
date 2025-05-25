import React, {useState} from 'react'

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
      <section style={{ 
        backgroundColor: ' #fef3dc',padding: '3rem 2rem',maxWidth: '600px',margin: '2rem auto',borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',color: '#772f1a'}}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Contacto</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formulario.nombre}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formulario.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formulario.telefono}
            onChange={handleChange}
            style={inputStyle}
          />
          <textarea
            name="mensaje"
            placeholder="Escribí tu consulta..."
            value={formulario.mensaje}
            onChange={handleChange}
            required
            rows={4}
            style={{ ...inputStyle, resize: 'none' }}
          />
          <button type="submit" style={{
            backgroundColor: '#a44a3f',
            color: '#fff',
            padding: '0.75rem',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}>
            Enviar
          </button>
        </form>
      </section>
    );
  };
  
  const inputStyle = {
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '1rem',
    backgroundColor: '#fffaf0',
    color: '#772f1a'
  };
  
  export default FormularioContacto;
