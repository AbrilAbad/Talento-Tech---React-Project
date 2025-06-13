import React from 'react';
import logo from '../assets/logo-letras-de-calabaza.png';
import '../layout/styles/HeaderNav.css'; 

const Header = () => {
  return (
    <header className="header-nav">
      <div>
        <img src={logo} alt="Letras de Calabaza logo" style={{ height: '110px' }} />
      </div>
    </header>
  );
};

export default Header;
