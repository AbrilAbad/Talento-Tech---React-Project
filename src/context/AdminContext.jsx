import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [productos, setProductos] = useState([]);
    const [form, setForm] = useState({
        nombre: '',
        autor: '',
        precio: '',
        genero: '',
        stock: '',
        sinopsis: ''
    });
    const [loading, setLoading] = useState(true);
    const [seleccionado, setSeleccionado] = useState(null);
    const [openEditor, setOpenEditor] = useState(false)
    const apiUrl = 'https://68379a962c55e01d184a4f16.mockapi.io/products'

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProductos(data);
                    setLoading(false);
                }, 2000);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(true);
                setLoading(false);
            });
    }, []);


    const cargarProductos = async () => {
        try {
            const respuesta = await fetch(apiUrl)
            const data = await respuesta.json()
            setProductos(data)
        } catch (error) {
            alert('Error al cargar el producto')
        }
    }

    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch(apiUrl,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(producto)
                }
            )
            if (!respuesta.ok) {
                throw new Error('Error al agregar producto')
            }

            const data = await respuesta.json()
            Swal.fire({
                title: "¡Producto agregado!",
                text: "El producto se ha registrado correctamente en el sistema",
                icon: "success"
            });
            cargarProductos()
        } catch (error) {
            alert('Error al añadir el producto')
        }
    }

    const actualizarProducto = async (producto) => {
        try {
            const respuesta = await fetch(`${apiUrl}/${producto.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(producto)
                }
            )
            if (!respuesta.ok) {
                throw new Error('Error al actualizar producto')
            }
            const data = await respuesta.json()
            Swal.fire({
                title: "¡Producto actualizado!",
                text: "Los cambios en el producto se guardaron correctamente",
                icon: "success"
            });
            setOpenEditor(false)
            setSeleccionado(null)
            cargarProductos()
        } catch (error) {
            alert('Error al actualizar el producto')
        }
    }



    const eliminarProducto = async (id) => {
        const confirmar = window.confirm('Desea eliminar el producto?')

        if (confirmar) {
            try {
                const respuesta = await fetch(`https://68379a962c55e01d184a4f16.mockapi.io/products/${id}`,
                    {
                        method: 'DELETE',
                    })
                if (!respuesta.ok) {
                    throw new Error('Error al eliminar producto')
                }
                Swal.fire({
                    title: "Producto eliminado",
                    text: "El producto ha sido eliminado del sistema",
                    icon: "warning"
                });
                cargarProductos()
            } catch (error) {
                alert('Error al eliminar el producto')
            }
        }
    }

    return (
        <AdminContext.Provider value={{
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
        }}>
            {children}
        </AdminContext.Provider>
    )
}
