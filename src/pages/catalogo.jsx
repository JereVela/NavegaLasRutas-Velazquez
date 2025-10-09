import React, { useState, useEffect } from 'react';
import CardItem from '../components/CardItem';
import { Spinner } from "../components/Spinner";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; 

function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      const productosCol = collection(db, 'productos');
      const snapshot = await getDocs(productosCol);
      const productosLista = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductos(productosLista);
      setLoading(false);
    };

    fetchProductos();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3>Catálogo de productos</h3>
          <div style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            flexWrap: 'wrap'
          }}>
            {productos.map((producto) => (
              <CardItem key={producto.id} prod={producto} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Catalogo;
