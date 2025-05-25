import React from 'react'
import Header from '../component/Header';
import Nav from '../component/Nav';
import FormularioContacto from '../component/FormularioContacto';
import Footer from '../component/Footer';

const Contacto = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Header />
        <Nav />
      </div>
      <FormularioContacto/>
      <Footer />
    </>
  )
}

export default Contacto
