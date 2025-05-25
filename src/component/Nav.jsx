import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{
      padding: '2rem 2rem',
    }}>
      <ul style={{display: 'flex',justifyContent: 'center',listStyle: 'none',gap: '2rem',margin: 0,padding: 0}}>
          <li>
            <Link to='/' style={{textDecoration: 'none',color: '#772f1a',fontWeight: 'bold',fontSize: '1.1rem',padding: '0.5rem 1rem',
                borderRadius: '5px',transition: 'background 0.3s ease'}}
              onMouseOver={e => e.target.style.backgroundColor = '#ddb892'}
              onMouseOut={e => e.target.style.backgroundColor = 'transparent'}
            >
              Inicio
            </Link>
          </li>

          <li>
            <Link to='/catalogo' style={{textDecoration: 'none',color: '#772f1a',fontWeight: 'bold',fontSize: '1.1rem',padding: '0.5rem 1rem',
                borderRadius: '5px',transition: 'background 0.3s ease'}}
              onMouseOver={e => e.target.style.backgroundColor = '#ddb892'}
              onMouseOut={e => e.target.style.backgroundColor = 'transparent'}
            >
              Catálogo
            </Link>
          </li>

          <li>
            <Link to='/contacto' style={{textDecoration: 'none',color: '#772f1a',fontWeight: 'bold',fontSize: '1.1rem',padding: '0.5rem 1rem',
                borderRadius: '5px',transition: 'background 0.3s ease'}}
              onMouseOver={e => e.target.style.backgroundColor = '#ddb892'}
              onMouseOut={e => e.target.style.backgroundColor = 'transparent'}
            >
              Contacto
            </Link>
          </li>
      </ul>
    </nav>
  );
};

export default Nav;

