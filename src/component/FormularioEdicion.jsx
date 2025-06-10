import React, { useEffect, useState } from 'react';
import './styles/Formulario.css';

function FormularioEdicion({ productoSelec, onActualizar }) {
    const [producto, setProducto] = useState(productoSelec);
    const [errorPrecio, setErrorPrecio] = useState('');
    const [errorStock, setErrorStock] = useState('');

    useEffect(() => {
        setProducto(productoSelec);
    }, [productoSelec]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });

        if (name === 'precio') {
            const precio = parseFloat(value);
            if (isNaN(precio) || precio <= 0) {
                setErrorPrecio('El precio debe ser mayor a 0');
            } else {
                setErrorPrecio('');
            }
        }

        if (name === 'stock') {
            const stock = parseInt(value);
            if (isNaN(stock) || stock < 0) {
                setErrorStock('El stock no puede ser negativo');
            } else {
                setErrorStock('');
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const precio = parseFloat(producto.precio);
        const stock = parseInt(producto.stock);

        let hasError = false;

        if (isNaN(precio) || precio <= 0) {
            setErrorPrecio('El precio debe ser mayor a 0');
            hasError = true;
        }

        if (isNaN(stock) || stock < 0) {
            setErrorStock('El stock no puede ser negativo');
            hasError = true;
        }

        if (hasError) return;

        setErrorPrecio('');
        setErrorStock('');
        onActualizar(producto);
    };

    return (
        <div className="formulario-container">
            <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Editar Producto</h2>
            <form onSubmit={handleSubmit} className="formulario-form">
                <section>
                    <label>ID</label>
                    <input
                        type="number"
                        name="id"
                        value={producto.id || ''}
                        onChange={handleChange}
                        className="formulario-input"
                        readOnly
                    />
                </section>
                <section>
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        value={producto.nombre || ''}
                        onChange={handleChange}
                        className="formulario-input"
                        required
                    />
                </section>
                <section>
                    <label>Autor</label>
                    <input
                        type="text"
                        name="autor"
                        value={producto.autor || ''}
                        onChange={handleChange}
                        className="formulario-input"
                        required
                    />
                </section>
                <section>
                    <label>Precio</label>
                    <input
                        type="number"
                        name="precio"
                        value={producto.precio || ''}
                        onChange={handleChange}
                        className="formulario-input"
                        required
                    />
                    {errorPrecio && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errorPrecio}</p>}
                </section>
                <section>
                    <label>Género</label>
                    <input
                        type="text"
                        name="genero"
                        value={producto.genero || ''}
                        onChange={handleChange}
                        className="formulario-input"
                        required
                    />
                </section>
                <section>
                    <label>Stock</label>
                    <input
                        type="number"
                        name="stock"
                        value={producto.stock || ''}
                        onChange={handleChange}
                        className="formulario-input"
                        required
                    />
                    {errorStock && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errorStock}</p>}
                </section>
                <section>
                    <label>Sinopsis</label>
                    <textarea
                        name="sinopsis"
                        value={producto.sinopsis || ''}
                        onChange={handleChange}
                        className="formulario-input"
                        style={{ height: '100px', resize: 'vertical' }}
                    />
                </section>

                <button type="submit" className="formulario-boton">Actualizar Producto</button>
            </form>
        </div>
    );
}

export default FormularioEdicion;
