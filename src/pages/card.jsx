import React from 'react';
import "./card.css"
const Card = ({ image, description, price, title, category }) => {
  return (
    <div className='cards-container' style={{


    }}>
      <img 
        src={image} 
        alt={title} 
        style={{ width: '100%', height: 'auto' }} 
      />
      <div style={{ padding: '16px' }}>
        <h3 style={{ margin: '0 0 8px 0' }}>{title}</h3>
        <p style={{ margin: '0 0 16px 0', color: '#555' }}>{description}</p>
        <p style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Precio: {price}</p>
        <h5 style={{ margin: '0 0 8px 0' }}>{category}</h5>
      </div>
    </div>
  );
};

export default Card;