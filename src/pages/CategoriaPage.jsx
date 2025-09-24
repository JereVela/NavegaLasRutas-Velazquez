import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/productosContext';
import CardItem from '../components/CardItem';

const CategoriaPage = () => {
    const { nombre } = useParams();
    const { productos } = useProductContext();

    console.log(nombre);


    const productosFiltrados = productos.filter(
        (producto) => producto.category.toLowerCase() === nombre.toLowerCase()
    );

    return (
        <div style={{ padding: "20px" }}>
            <h2>Categoría: {nombre}</h2>
            {productosFiltrados.length === 0 ? (
                <p>No hay productos en esta categoría.</p>
            ) : (
                <div style={{ display: "flex", flexDirection: "row" }} >
                    {productosFiltrados.map((producto, index) => (
                        <CardItem key={index} prod={producto} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoriaPage;
