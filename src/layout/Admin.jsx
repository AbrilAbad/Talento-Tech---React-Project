import React, { useState, useEffect, useContext } from 'react'
import FormularioProducto from '../component/FormularioProducto'
import '../component/styles/Formulario.css';
import '../component/styles/Estilos.css';
import FormularioEdicion from '../component/FormularioEdicion';
import { AdminContext } from "../context/AdminContext";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Admin = () => {

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const {
    productos,
    loading,
    open,
    setOpen,
    openEditor,
    setOpenEditor,
    seleccionado,
    setSeleccionado,
    agregarProducto,
    actualizarProducto,
    eliminarProducto,
  } = useContext(AdminContext)


  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1 className="admin-title" style={{ margin: 0 }}>Panel Administrativo</h1>

        <button onClick={handleLogout} title="Cerrar sesión" className="admin-logout-btn">
          <i className="fas fa-door-closed"></i>
        </button>
      </div>

      <button className="btn btn-add" onClick={() => setOpen(true)}>Agregar Nuevo Producto</button>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="product-grid">
          {productos.map((producto) => (
            <div key={producto.id} className="product-card">
              <h3>{producto.nombre}</h3>
              <span><strong>Precio:</strong> ${producto.precio}</span>
              <span><strong>Género:</strong> {producto.genero}</span>
              <span><strong>Stock:</strong> {producto.stock}</span>
              <span><strong>Autor:</strong> {producto.autor}</span>
              <span><strong>Sinopsis:</strong> {producto.sinopsis}</span>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem", marginTop: "1rem" }}>
                <button className="btn btn-add" onClick={() => {
                  setOpenEditor(true);
                  setSeleccionado(producto);
                }}>Editar</button>
                <button className="btn btn-add" onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {open && <FormularioProducto onAgregar={agregarProducto} />}
      {openEditor && <FormularioEdicion productoSelec={seleccionado} onActualizar={actualizarProducto} />}
    </div>
  );
}

export default Admin
