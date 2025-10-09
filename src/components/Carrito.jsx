import { useCarritoContext } from '../context/CarritoContext';
import { CartItem } from "./CartItem";
import { useState } from 'react';

export const Carrito = ({ items }) => {
    const { vaciarCarrito } = useCarritoContext();
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
    const [codigoCompra, setCodigoCompra] = useState('');
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        tarjeta: '',
        email: ''
    });

    const calcularTotal = () => {
        return items.reduce((total, item) => total + (parseFloat(item.price) * item.cantidad), 0);
    };

    const generarCodigoCompra = () => {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let codigo = '';
        for (let i = 0; i < 8; i++) {
            codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return codigo;
    };

    const handleFinalizarCompra = () => {
        setMostrarFormulario(true);
    };

    const handleFormularioChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleEnviarFormulario = (e) => {
        e.preventDefault();

        const { nombre, telefono, tarjeta, email } = formData;
        if (!nombre || !telefono || !tarjeta || !email) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const codigo = generarCodigoCompra();
        setCodigoCompra(codigo);
        setMostrarFormulario(false);
        setMostrarConfirmacion(true);
    };

    const cerrarConfirmacion = () => {
        setMostrarConfirmacion(false);
        vaciarCarrito();
        setFormData({
            nombre: '',
            telefono: '',
            tarjeta: '',
            email: ''
        });
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <h2>Carrito de Compras</h2>
            <div style={{ width: "90%", backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px" }}>
                {items && items.length > 0 ? (
                    <>
                        {items.map((item, index) => (
                            <CartItem key={item.id || index} item={item} />
                        ))}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px", paddingTop: "20px", borderTop: "1px solid #ddd" }}>
                            <h2>Total: ${calcularTotal().toFixed(2)}</h2>
                            <div>
                                <button
                                    onClick={vaciarCarrito}
                                    style={{
                                        padding: "10px 20px",
                                        backgroundColor: "#ff4444",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        marginRight: "10px"
                                    }}
                                >
                                    Vaciar Carrito
                                </button>
                                <button
                                    onClick={handleFinalizarCompra}
                                    style={{
                                        padding: "10px 20px",
                                        backgroundColor: "#4CAF50",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "5px",
                                        cursor: "pointer"
                                    }}
                                >
                                    Finalizar Compra
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>No hay items en el carrito</p>
                )}
            </div>

            {mostrarFormulario && (
                <div style={modalEstilo}>
                    <div style={modalContenidoEstilo}>
                        <h2>Completa tus datos</h2>
                        <form onSubmit={handleEnviarFormulario} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
                            <input type="text" name="nombre" placeholder="Nombre completo" value={formData.nombre} onChange={handleFormularioChange} required />
                            <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleFormularioChange} required />
                            <input type="text" name="tarjeta" placeholder="Número de tarjeta" value={formData.tarjeta} onChange={handleFormularioChange} required />
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleFormularioChange} required />
                            <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
                                Confirmar compra
                            </button>
                            <button type="button" onClick={() => setMostrarFormulario(false)} style={{ backgroundColor: '#ccc', color: '#333', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
                                Cancelar
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {mostrarConfirmacion && (
                <div style={modalEstilo}>
                    <div style={modalContenidoEstilo}>
                        <h2 style={{ color: '#4CAF50', marginBottom: '15px' }}>¡Compra Realizada con Éxito!</h2>
                        <p style={{ marginBottom: '10px', fontSize: '16px' }}>Gracias por tu compra, {formData.nombre}.</p>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '8px',
                            margin: '20px 0',
                            border: '2px dashed #4CAF50'
                        }}>
                            <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#666' }}>
                                Código de seguimiento:
                            </p>
                            <p style={{
                                margin: 0,
                                fontSize: '24px',
                                fontWeight: 'bold',
                                color: '#4CAF50',
                                letterSpacing: '2px'
                            }}>
                                {codigoCompra}
                            </p>
                        </div>
                        <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
                            Guarda este código para realizar el seguimiento de tu pedido.
                        </p>
                        <button
                            onClick={cerrarConfirmacion}
                            style={{
                                padding: '12px 30px',
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                fontWeight: 'bold'
                            }}
                        >
                            Aceptar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const modalEstilo = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
};

const modalContenidoEstilo = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    width: '90%',
    textAlign: 'center'
};
