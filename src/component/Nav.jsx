import React from 'react';
import { Link } from 'react-router-dom';
import '../layout/styles/HeaderNav.css';

const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li><Link to='/' className="nav-link" onMouseOver={hoverIn} onMouseOut={hoverOut}>Inicio</Link></li>
        <li><Link to='/catalogo' className="nav-link" onMouseOver={hoverIn} onMouseOut={hoverOut}>Catálogo</Link></li>
        <li><Link to='/contacto' className="nav-link" onMouseOver={hoverIn} onMouseOut={hoverOut}>Contacto</Link></li>
        <li><Link to='/login' className="nav-link" onMouseOver={hoverIn} onMouseOut={hoverOut} title="Login">
          <i className="fas fa-door-open"></i></Link></li>
        <li><Link to='/admin' className="nav-link" onMouseOver={hoverIn} onMouseOut={hoverOut} title="Admin">
          <i className="fas fa-user"></i></Link></li>
      </ul>
    </nav>
  );
};

const hoverIn = e => e.target.style.backgroundColor = '#ddb892';
const hoverOut = e => e.target.style.backgroundColor = 'transparent';

export default Nav;
