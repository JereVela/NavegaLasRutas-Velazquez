import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/productosContext';

const DetailPage = () => {
  const { id } = useParams();
  const { productos } = useProductContext();

  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Producto no encontrado</h2>
        <p>El producto con ID {id} no existe.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{producto.title}</h2>
      <img
        src={producto.image}
        alt={producto.title}
        style={{ maxWidth: '300px', borderRadius: '8px' }}
      />
      <p style={{ marginTop: '10px' }}>{producto.description}</p>
      <p><strong>Precio:</strong> {producto.price}</p>
      <p><em>Categoría:</em> {producto.category}</p>
    </div>
  );
};

export default DetailPage;
