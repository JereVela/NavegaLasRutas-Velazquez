import React, { useEffect, useState } from 'react';
import './HomePage.css';
import CardItem from '../components/CardItem';
import { Spinner } from '../components/Spinner';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; 

const HomePage = () => {
  const [ofertas, setOfertas] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosCol = collection(db, 'productos');
        const snapshot = await getDocs(productosCol);
        const productosLista = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        const prodOfertas = productosLista.filter(
          producto => producto.category?.toUpperCase() === 'PELOTAS'
        );
        setOfertas(prodOfertas);
      } catch (error) {
        console.error('Error al obtener productos:', error);
        setOfertas([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ padding: '16px', width: '100%', textAlign: 'center' }}>
        <h3>OFERTAS!</h3>

        {loading ? (
          <Spinner />
        ) : ofertas.length === 0 ? (
          <p>No hay productos en oferta.</p>
        ) : (
          <div style={{ display: 'flex', width: '100%', justifyContent: 'center', flexWrap: 'wrap', gap: '16px' }}>
            {ofertas.map((producto) => (
              <CardItem key={producto.id} prod={producto} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
