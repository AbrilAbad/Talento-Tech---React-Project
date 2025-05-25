import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/notfound.png'

const NotFound = () => {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fef3dc',
      backgroundImage: `url(${img})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      color: '#a44a3f',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '6rem', margin: 0 }}>404</h1>
      <p style={{ fontSize: '1.5rem',  textShadow: '2px 2px 2px rgba(0, 0, 0, 0.31)', marginBottom: '2rem' }}>
        Página no encontrada
      </p>
      <Link to="/" style={{
        backgroundColor: '#a44a3f',
        color: '#fff',
        padding: '0.75rem 1.5rem',
        borderRadius: '6px',
        textDecoration: 'none',
        fontWeight: 'bold',
      }}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;

