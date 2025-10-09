import React from 'react';
import Button from '@mui/material/Button';

export const ItemCount = ({ 
    cantidad, 
    onIncrementar, 
    onDecrementar, 
    onAgregar, 
    stock,
    showAddButton = true 
}) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button 
                    variant="outlined" 
                    onClick={onDecrementar}
                    disabled={cantidad <= 0}
                >
                    -
                </Button>
                <span style={{ margin: '0 12px', fontSize: '18px', minWidth: '30px', textAlign: 'center' }}>
                    {cantidad}
                </span>
                <Button 
                    variant="outlined" 
                    onClick={onIncrementar}
                    disabled={cantidad >= stock}
                >
                    +
                </Button>
            </div>

            {showAddButton && (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onAgregar}
                    disabled={cantidad === 0}
                >
                    Agregar al carrito
                </Button>
            )}
        </div>
    );
};