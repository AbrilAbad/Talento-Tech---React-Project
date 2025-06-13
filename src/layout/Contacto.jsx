import React from 'react'
import Header from '../component/Header';
import Nav from '../component/Nav';
import FormularioContacto from '../component/FormularioContacto';
import Footer from '../component/Footer';
import './styles/HeaderNav.css';

const Contacto = () => {
  return (
    <>
      <div className="header-nav">
        <Header />
        <Nav />
      </div>
      <FormularioContacto/>
      <Footer />
    </>
  )
}

export default Contacto
