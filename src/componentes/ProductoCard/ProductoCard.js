import React from 'react';
import './ProductoCard.css';

function ProductoCard({ producto, agregarAlCarrito }) {
  const { nombre, descripcion, precio, imagen, categoria } = producto;
  
  return (
    <div className="producto-card">
      <div className="producto-imagen">
        <img src={imagen} alt={nombre} />
        <span className="categoria-badge">{categoria}</span>
      </div>
      
      <div className="producto-info">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <div className="producto-footer">
          <span className="precio">${precio.toFixed(2)}</span>
          <button 
            className="btn-agregar" 
            onClick={() => agregarAlCarrito(producto)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductoCard;