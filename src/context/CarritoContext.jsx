import React, { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (productoNuevo) => {
    const productoExistente = carrito.find(p => p.id === productoNuevo.id);
    const stockDisponible = productoNuevo.stock;

    if (productoExistente) {
      const cantidadEnCarrito = productoExistente.cantidad;
      const cantidadTotal = cantidadEnCarrito + productoNuevo.cantidad;

      if (cantidadTotal > stockDisponible) {
        const unidadesDisponibles = stockDisponible - cantidadEnCarrito;
        alert(unidadesDisponibles > 0
          ? `Solo hay ${unidadesDisponibles} unidades disponibles para este producto.`
          : `No hay más stock disponible para este producto.`);
        return;
      }

      const nuevoCarrito = carrito.map(p =>
        p.id === productoNuevo.id
          ? { ...p, cantidad: cantidadTotal }
          : p
      );
      setCarrito(nuevoCarrito);
    } else {

      if (productoNuevo.cantidad > stockDisponible) {
        alert(`Solo hay ${stockDisponible} unidades disponibles de este producto.`);
        return;
      }

      setCarrito(prev => [...prev, productoNuevo]);
    }
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(prod => prod.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarritoContext = () => useContext(CarritoContext);
