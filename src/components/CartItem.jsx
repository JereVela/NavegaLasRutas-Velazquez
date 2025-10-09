import { useCarritoContext } from '../context/CarritoContext';
import { ItemCount } from './ItemCount';

export const CartItem = ({ item }) => {
    const { agregarAlCarrito, eliminarDelCarrito } = useCarritoContext();

    const incrementarCantidad = () => {
        agregarAlCarrito({
            ...item,
            cantidad: 1 
        });
    };

    const decrementarCantidad = () => {
        if (item.cantidad > 1) {
            agregarAlCarrito({
                ...item,
                cantidad: -1 
            });
        } else {
            eliminarDelCarrito(item.id);
        }
    };

    const eliminarItem = () => {
        eliminarDelCarrito(item.id);
    };

    return (
        <div style={{ border: "1px solid black", margin: "10px", padding: "10px", borderRadius: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <img src={item.image} alt={item.title} style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "10px", marginRight: "20px" }} />
                <div style={{ flex: 1 }}>
                    <h3>{item.title}</h3>
                    <p>Precio Unitario: ${item.price}</p>
                    {item.category && <p>Categoría: {item.category}</p>}
                    {item.description && (
                        <p style={{ fontSize: "0.9em", color: "#666", maxWidth: "300px" }}>
                            {item.description.length > 100
                                ? `${item.description.substring(0, 100)}...`
                                : item.description
                            }
                        </p>
                    )}
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                {/* Usamos el componente ItemCount sin el botón de agregar */}
                <ItemCount
                    cantidad={item.cantidad}
                    onIncrementar={incrementarCantidad}
                    onDecrementar={decrementarCantidad}
                    onAgregar={() => {}} // Pasamos función vacía pero no se mostrará
                    stock={999}
                    showAddButton={false} // ⬅️ Esto oculta el botón "Agregar al carrito"
                />

                {/* Subtotal */}
                <h3 style={{ margin: 0 }}>
                    Subtotal: ${(parseFloat(item.price) * item.cantidad).toFixed(2)}
                </h3>

                {/* Botón eliminar */}
                <button
                    onClick={eliminarItem}
                    style={{
                        padding: "5px 10px",
                        backgroundColor: "#ff4444",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.8em"
                    }}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}