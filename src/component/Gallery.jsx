import React, {useContext} from 'react';
import productos from "../../public/utils/productos"
import ProductLista from './ProductLista';
import fondo from '../assets/fondocatalogo.jpg';
import { CarritoContext } from '../context/CarritoContext';

const Gallery = () => {

    const {handleAddToCart, productosFiltrados, busqueda, setBusqueda} = useContext (CarritoContext)

    return (
    <section style={{ padding: "2rem", backgroundImage: `url(${fondo})`, backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <h1 style={{ marginTop: "2rem", color: "rgb(254, 243, 220)", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', 
        textAlign: "center" }}>Catálogo</h1>
        <input
        type='text'
        placeholder='Buscar producto...'
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}/>
      <ProductLista productos={productosFiltrados} addToCart={handleAddToCart}/>
    </section>
    )
  }
  
  export default Gallery;
