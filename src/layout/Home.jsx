import React, {useEffect, useState} from 'react'
import Header from '../component/Header';
import Nav from '../component/Nav';
import Main from '../component/Main';
import AutoresDestacados from '../component/AutoresDestacados';
import Footer from '../component/Footer';
import cargando from '../assets/cargando.gif'

const Home = () => {
  
  const [autores, setAutores] = useState([])
  const [carga, setCarga] =useState([true])

  useEffect(() => {
    fetch('../utils/autores.json')
      .then((respuesta) => respuesta.json())
      .then((datos) => { setAutores(datos) 
      setCarga(false) } )
      .catch((error) => { console.error('Error:', error)
      setCarga(false)} )
    }, []);


  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Header />
        <Nav />
      </div>
      <Main />
      <br />
      {
        carga ? <img src={cargando} alt='cargando'/> :  
        <AutoresDestacados autores={autores} />
      }
      <Footer />
    </>
  );
};

export default Home;
