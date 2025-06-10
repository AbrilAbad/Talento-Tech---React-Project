import React, { useContext, useState } from 'react';
import './App.css';
import Home from './layout/Home';
import Catalogo from './layout/Catalogo';
import { Routes, Route } from 'react-router-dom';
import NotFound from './layout/NotFound';
import Contacto from './layout/Contacto';
import DetalleLibro from './component/DetalleLibro';
import Login from './layout/Login';
import Admin from './layout/Admin';
import RutaProtegida from './auth/RutaProtegida';
import { CarritoContext } from './context/CarritoContext';

function App() {

  const {isAuthenticated} = useContext (CarritoContext)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/catalogo' element={<Catalogo />} />

        <Route path='/contacto' element={<Contacto/>} />
        
        <Route path='/catalogo/:id' element={<DetalleLibro />} />

        <Route path='/admin' element={<RutaProtegida isAuthenticated={isAuthenticated}> <Admin /> </RutaProtegida>} />

        <Route path='/login' element={<Login/>} />

        <Route path='*' element={<NotFound/>} />

      </Routes>
    </>
  );
}

export default App;
