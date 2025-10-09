import React from "react";
import "./CartWidget.css";
import { useCarritoContext } from "../context/CarritoContext";

const CartWidget = () => {
  const { carrito } = useCarritoContext();

  const totalCantidad = carrito.reduce((total, item) => total + item.cantidad, 0);

  const imgCarrito = "https://images.vexels.com/media/users/3/132114/isolated/preview/5367202ad4dd11725544cb3008049f96-icono-plano-de-carrito-de-compras.png";

  return (
    <div className="cart-widget">
      <img src={imgCarrito} alt="imagen carrito" className="carrito" />
      {totalCantidad > 0 && <span className="cart-count">{totalCantidad}</span>}
    </div>
  );
};

export default CartWidget;
