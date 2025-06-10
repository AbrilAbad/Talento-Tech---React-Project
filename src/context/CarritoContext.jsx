import { createContext, useState, useEffect } from "react";
import productos from "../../public/utils/productos";

export const CarritoContext = createContext()

export const CarritoProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuth] = useState(false);
  const [busqueda, setBusqueda] = useState("")

  const productosFiltrados = productos.filter((productos) => productos?.nombre.toLowerCase().includes(busqueda.toLowerCase()))

  const handleAddToCart = (producto) => {
    setCart((prevCart) => {
      const existe = prevCart.find((item) => item.nombre === producto.nombre);
      if (existe) {
        if (existe.cantidad < producto.stock) {
          return prevCart.map((item) =>
            item.nombre === producto.nombre
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          );
        } else {
          alert(`No puedes agregar más unidades de ${producto.nombre}. Stock disponible: ${producto.stock}`);
          return prevCart;
        }
      } else {
        return [...prevCart, { ...producto, cantidad: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (producto) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.nombre === producto.nombre
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };


  return (

    <CarritoContext.Provider value={{
      cart, productos, handleAddToCart, handleRemoveFromCart, isAuthenticated, setIsAuth,
      productosFiltrados, busqueda, setBusqueda
    }}>
      {children}
    </CarritoContext.Provider>
  )
}