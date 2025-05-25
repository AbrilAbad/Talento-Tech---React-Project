import React from 'react';
import logo from '../assets/logo-letras-de-calabaza.png';

const Header = () => {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img src={logo} alt="Letras de Calabaza logo" style={{ height: '110px' }} />
      </div>
    </header>
  );
};

export default Header;
