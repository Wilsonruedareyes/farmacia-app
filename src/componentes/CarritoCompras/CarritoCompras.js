import React from 'react';
import './CarritoCompras.css';

function CarritoCompras({ productos, eliminarDelCarrito }) {
  // Calcular el total del carrito
  const total = productos.reduce((sum, producto) => 
    sum + (producto.precio * producto.cantidad), 0);
  
  return (
    <div className="carrito-compras">
      <h2>Tu Carrito</h2>
      
      {productos.length === 0 ? (
        <div className="carrito-vacio">
          <i className="fas fa-shopping-cart carrito-icono"></i>
          <p>Tu carrito está vacío</p>
          <p className="sugerencia">Agrega productos para continuar</p>
        </div>
      ) : (
        <>
          <div className="productos-lista">
            {productos.map(producto => (
              <div key={producto.id} className="producto-carrito">
                <div className="producto-imagen">
                  <img src={producto.imagen} alt={producto.nombre} />
                </div>
                
                <div className="producto-detalles">
                  <h3>{producto.nombre}</h3>
                  <p className="producto-precio">${producto.precio.toFixed(2)} x {producto.cantidad}</p>
                  <p className="producto-subtotal">
                    Subtotal: ${(producto.precio * producto.cantidad).toFixed(2)}
                  </p>
                </div>
                
                <button 
                  className="btn-eliminar" 
                  onClick={() => eliminarDelCarrito(producto.id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))}
          </div>
          
          <div className="carrito-resumen">
            <div className="total">
              <span>Total:</span>
              <span className="total-precio">${total.toFixed(2)}</span>
            </div>
            
            <button className="btn-checkout">
              Proceder al pago
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CarritoCompras;