import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardItem from '../components/CardItem';
import { Spinner } from '../components/Spinner';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const CategoriaPage = () => {
    const { nombre } = useParams();
    const [productosCategoria, setProductosCategoria] = useState(undefined);
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
                const prodCategoria = productosLista.filter(prod =>
                    prod.category.toUpperCase() === nombre.toUpperCase()
                );
                setProductosCategoria(prodCategoria);
                setLoading(false);
            } catch (error) {
                console.error("Error al obtener productos:", error);
                setProductosCategoria([]); 
            }
        };

        fetchProductos();
    }, [nombre]); 

    return (
        <div style={{ padding: "20px" }}>
            <h2>Categoría: {nombre}</h2>

            {loading ? (
                <Spinner />
            ) : productosCategoria.length === 0 ? (
                <p>No hay productos en esta categoría.</p>
            ) : (
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "16px" }}>
                    {productosCategoria.map((producto) => (
                        <CardItem key={producto.id} prod={producto} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoriaPage;
