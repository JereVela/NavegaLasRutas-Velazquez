import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCarritoContext } from '../context/CarritoContext';
import { ItemCount } from '../components/ItemCount';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const DetailPage = () => {
  const { id } = useParams();
  const { agregarAlCarrito } = useCarritoContext();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosCol = collection(db, 'productos');
        const snapshot = await getDocs(productosCol);
        const productosLista = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        const prodSeleccionado = productosLista.find(p => p.id === id);
        setProducto(prodSeleccionado || undefined);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar el producto:", error);
        setLoading(false);
      }
    };

    fetchProductos();
  }, [id]);

  const incrementar = () => {
    if (producto && cantidad > producto.stock) return
    setCantidad(prev => prev + 1);
  };

  const decrementar = () => {
    setCantidad(prev => (prev > 0 ? prev - 1 : 0));
  };

  const handleAgregar = () => {
    if (cantidad > 0 && producto) {
      agregarAlCarrito({ ...producto, cantidad });

    }
  };

  if (loading) {
    return <div style={{ padding: '20px' }}>Cargando producto...</div>;
  }

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
      <p><strong>Precio:</strong> ${producto.price}</p>
      <p><em>Categoría:</em> {producto.category}</p>

      <ItemCount
        cantidad={cantidad}
        onIncrementar={incrementar}
        onDecrementar={decrementar}
        onAgregar={handleAgregar}
        stock={producto.stock} 
      />
    </div>
  );
};

export default DetailPage;