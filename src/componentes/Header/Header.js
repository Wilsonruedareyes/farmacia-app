import React from 'react';
import './Header.css';

function Header({ cantidadProductos, toggleCarrito, scrollToSection }) {
  // Manejador para los enlaces de navegación
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>DeviiFarma</h1>
        <span className="slogan">Tu salud, nuestra prioridad</span>
      </div>
      
      <nav className="navegacion">
        <ul>
          <li><a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')}>Inicio</a></li>
          <li><a href="#productos" onClick={(e) => handleNavClick(e, 'productos')}>Productos</a></li>
          <li><a href="#ofertas" onClick={(e) => handleNavClick(e, 'ofertas')}>Ofertas</a></li>
          <li><a href="#contacto" onClick={(e) => handleNavClick(e, 'contacto')}>Contacto</a></li>
        </ul>
      </nav>
      
      <div className="carrito-icono" onClick={toggleCarrito}>
        <i className="fas fa-shopping-cart"></i>
        {cantidadProductos > 0 && <span className="contador">{cantidadProductos}</span>}
      </div>
    </header>
  );
}

export default Header;