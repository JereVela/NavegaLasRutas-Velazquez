import React from 'react';
import CardItem from '../components/CardItem';
import { useProductContext } from '../context/productosContext';

function Catalogo() {
  const { productos } = useProductContext();

  return (
    <div style={{textAlign: "center"}}>
      <h3>Catálogo de productos</h3>
      <div style={{ display: "flex", width: "100%", justifyContent: "center", flexWrap: 'wrap' }}>
        {productos.map((producto) => (
          <CardItem key={producto.id} prod={producto} />
        ))}
      </div>
    </div>
  );
}

export default Catalogo;