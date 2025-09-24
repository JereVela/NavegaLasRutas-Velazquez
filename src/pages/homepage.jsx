import React, { useState } from 'react';
import './HomePage.css';
import CardItem from '../components/CardItem';
import { useProductContext } from '../context/productosContext';


const HomePage = () => {
  const [categoryFilter, setCategoryFilter] = useState('todos');
  const { productos } = useProductContext();
  const ofertas = productos.filter(producto => producto.category === "Pelotas");


  return (
    <div style={{ width: "100%", display:"flex", flexDirection:"column", alignItems:"center" }}>
      <div style={{ padding: "16px", width: "100%", textAlign:"center" }}>
        <h3>OFERTAS!</h3>

        <div style={{ display: "flex", width: "100%", justifyContent: "center", flexWrap: 'wrap' }}>
          {ofertas.map((producto, index) => (
            <CardItem key={index} prod={producto} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;