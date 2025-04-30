import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>DeviiFarma</h3>
          <p>Tu farmacia online de confianza. Ofrecemos productos de calidad para el cuidado de tu salud.</p>
        </div>
        
        <div className="footer-section">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#ofertas">Ofertas</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contacto</h3>
          <p><i className="fas fa-map-marker-alt"></i> Av. Principal #123, Ciudad</p>
          <p><i className="fas fa-phone"></i> (123) 456-7890</p>
          <p><i className="fas fa-envelope"></i> info@deviifarma.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} DeviiFarma. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;