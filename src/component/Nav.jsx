import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{ padding: '2rem 2rem' }}>
      <ul style={{
        display: 'flex',
        justifyContent: 'center',
        listStyle: 'none',
        gap: '2rem',
        margin: 0,
        padding: 0
      }}>
        <li>
          <Link to='/' style={linkStyle} onMouseOver={hoverIn} onMouseOut={hoverOut}>
            Inicio
          </Link>
        </li>

        <li>
          <Link to='/catalogo' style={linkStyle} onMouseOver={hoverIn} onMouseOut={hoverOut}>
            Catálogo
          </Link>
        </li>

        <li>
          <Link to='/contacto' style={linkStyle} onMouseOver={hoverIn} onMouseOut={hoverOut}>
            Contacto
          </Link>
        </li>

        <li>
          <Link to='/login' style={linkStyle} onMouseOver={hoverIn} onMouseOut={hoverOut} title="Login">
            <i className="fas fa-door-open" style={{ fontSize: '1.3rem' }}></i>
          </Link>
        </li>

        <li>
          <Link to='/admin' style={linkStyle} onMouseOver={hoverIn} onMouseOut={hoverOut} title="Admin">
            <i className="fas fa-user" style={{ fontSize: '1.3rem' }}></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const linkStyle = {
  textDecoration: 'none',
  color: '#772f1a',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  padding: '0.5rem 1rem',
  borderRadius: '5px',
};

const hoverIn = e => e.target.style.backgroundColor = '#ddb892';
const hoverOut = e => e.target.style.backgroundColor = 'transparent';

export default Nav;
