import React, { useState } from 'react';
import Header from './componentes/Header/Header';
import ListaProductos from './componentes/ListaProductos/ListaProductos';
import CarritoCompras from './componentes/CarritoCompras/CarritoCompras';
import Footer from './componentes/Footer/Footer';
import './App.css';

function App() {
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const agregarAlCarrito = (producto) => {
    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.id === producto.id);
    
    if (productoExistente) {
      // Si ya existe, aumentar la cantidad
      setCarrito(carrito.map(item => 
        item.id === producto.id 
          ? { ...item, cantidad: item.cantidad + 1 } 
          : item
      ));
    } else {
      // Si no existe, agregarlo con cantidad 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  // Función segura para scroll
  const scrollToSection = (sectionId) => {
    // Si estamos en la vista del carrito, primero volvemos a la vista principal
    if (mostrarCarrito) {
      setMostrarCarrito(false);
      // Esperamos a que se renderice la vista principal antes de hacer scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="App">
      <Header 
        cantidadProductos={carrito.reduce((total, item) => total + item.cantidad, 0)} 
        toggleCarrito={toggleCarrito}
        scrollToSection={scrollToSection}
      />
      
      <main className="contenido-principal">
        {/* Renderizamos el carrito o el contenido principal */}
        {mostrarCarrito ? (
          <div className="vista-carrito">
            <CarritoCompras 
              productos={carrito} 
              eliminarDelCarrito={eliminarDelCarrito} 
            />
            <div className="acciones-carrito">
              <button 
                className="btn-volver" 
                onClick={() => setMostrarCarrito(false)}
              >
                Volver a la tienda
              </button>
            </div>
          </div>
        ) : (
          <>
            <section id="inicio" className="seccion-inicio">
              <div className="banner" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${process.env.PUBLIC_URL}/images/farmacia-banner.jpg)` }}>
                <div className="banner-content">
                  <h2>Bienvenido a DeviiFarma</h2>
                  <p>Tu farmacia online de confianza. Ofrecemos productos de calidad para el cuidado de tu salud.</p>
                  <button className="btn-explorar" onClick={() => scrollToSection('productos')}>
                    Explorar Productos
                  </button>
                </div>
              </div>
            </section>
            
            <section id="productos" className="seccion-productos">
              <h2 className="titulo-seccion">Nuestros Productos</h2>
              <ListaProductos agregarAlCarrito={agregarAlCarrito} />
            </section>
            
            <section id="ofertas" className="seccion-ofertas">
              <h2>Ofertas Especiales</h2>
              <p>Próximamente encontrarás aquí nuestras mejores ofertas.</p>
            </section>
            
            <section id="contacto" className="seccion-contacto">
              <h2>Contacto</h2>
              <div className="info-contacto">
                <p><i className="fas fa-map-marker-alt"></i> Av. Principal #123, Ciudad</p>
                <p><i className="fas fa-phone"></i> (123) 456-7890</p>
                <p><i className="fas fa-envelope"></i> info@deviifarma.com</p>
              </div>
            </section>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;