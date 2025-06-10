import React, {useState} from 'react'
import Header from '../component/Header';
import Nav from '../component/Nav';
import Gallery from '../component/Gallery';
import Carrito from '../component/Carrito';
import Footer from '../component/Footer';
import cargando from '../assets/cargando.gif'

const Catalogo = () => {

    return (
    <>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Header />
        <Nav />
    </div>  
    <Gallery />
    <Carrito />
    <Footer />
    </>
  )
}

export default Catalogo
