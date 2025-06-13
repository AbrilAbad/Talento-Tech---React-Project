import React, {useState} from 'react'
import Header from '../component/Header';
import Nav from '../component/Nav';
import Gallery from '../component/Gallery';
import Carrito from '../component/Carrito';
import Footer from '../component/Footer';
import './styles/HeaderNav.css';

const Catalogo = () => {

    return (
    <>
    <div className="header-nav">
        <Header />
        <Nav />
    </div>  
    <br />
    <Gallery />
    <Carrito />
    <Footer />
    </>
  )
}

export default Catalogo
