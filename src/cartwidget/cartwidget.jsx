import React from "react";
import"./CartWidget.css";
const CartWidget = () => {
      const imgCarrito= "https://images.vexels.com/media/users/3/132114/isolated/preview/5367202ad4dd11725544cb3008049f96-icono-plano-de-carrito-de-compras.png";


return (

      <div>
        <img src={imgCarrito} alt="imagen carrito" className="carrito" />
      </div>

  );
};

export default CartWidget;