import React, { useState, useEffect } from 'react';
import ProductoCard from '../ProductoCard/ProductoCard';
import './ListaProductos.css';

function ListaProductos({ agregarAlCarrito }) {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');
  const [cargando, setCargando] = useState(true);
  
  // Datos de ejemplo para la farmacia con precios en formato colombiano
  useEffect(() => {
    // Simulamos una carga de datos
    setTimeout(() => {
      const productosData = [
        {
          id: 1,
          nombre: 'Paracetamol 500mg',
          descripcion: 'Analgésico y antipirético para aliviar el dolor y reducir la fiebre',
          precio: 12000,
          imagen: `${process.env.PUBLIC_URL}/images/Paracetamol 500mg.png`,
          categoria: 'Analgésicos'
        },
        {
          id: 2,
          nombre: 'Ibuprofeno 400mg',
          descripcion: 'Antiinflamatorio no esteroideo para dolor e inflamación',
          precio: 15500,
          imagen: `${process.env.PUBLIC_URL}/images/Ibuprofeno 400mg.png`,
          categoria: 'Antiinflamatorios'
        },
        {
          id: 3,
          nombre: 'Omeprazol 20mg',
          descripcion: 'Inhibidor de la bomba de protones para problemas gástricos',
          precio: 18000,
          imagen: `${process.env.PUBLIC_URL}/images/Omeprazol 20mg.png`,
          categoria: 'Digestivo'
        },
        {
          id: 4,
          nombre: 'Loratadina 10mg',
          descripcion: 'Antihistamínico para aliviar síntomas de alergia',
          precio: 13500,
          imagen: `${process.env.PUBLIC_URL}/images/Loratadina 10mg.png`,
          categoria: 'Alergias'
        },
        {
          id: 5,
          nombre: 'Vitamina C 1000mg',
          descripcion: 'Suplemento vitamínico para reforzar el sistema inmunológico',
          precio: 25000,
          imagen: `${process.env.PUBLIC_URL}/images/Vitamina C 1000mg.png`,
          categoria: 'Vitaminas'
        },
        {
          id: 6,
          nombre: 'Alcohol 70%',
          descripcion: 'Antiséptico para desinfección de heridas y superficies',
          precio: 8500,
          imagen: `${process.env.PUBLIC_URL}/images/Alcohol.png`,
          categoria: 'Higiene'
        },
        {
          id: 7,
          nombre: 'Vendas elásticas',
          descripcion: 'Para inmovilización y compresión de lesiones',
          precio: 9800,
          imagen: `${process.env.PUBLIC_URL}/images/Venda.png`,
          categoria: 'Primeros auxilios'
        },
        {
          id: 8,
          nombre: 'Termómetro digital',
          descripcion: 'Para medición precisa de la temperatura corporal',
          precio: 32000,
          imagen: `${process.env.PUBLIC_URL}/images/Termómetro digital.png`,
          categoria: 'Dispositivos médicos'
        }
      ];
      
      setProductos(productosData);
      setCargando(false);
    }, 1000); // Simulamos 1 segundo de carga
  }, []);
  
  // Obtener todas las categorías únicas
  const categorias = ['Todos', ...new Set(productos.map(p => p.categoria))];
  
  // Filtrar productos por categoría y búsqueda
  const productosFiltrados = productos.filter(producto => {
    const coincideCategoria = categoriaSeleccionada === 'Todos' || producto.categoria === categoriaSeleccionada;
    const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
                            producto.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <div className="lista-productos-container">
      <div className="filtros">
        <div className="busqueda">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        
        <div className="categorias">
          {categorias.map(categoria => (
            <button
              key={categoria}
              className={`categoria-btn ${categoriaSeleccionada === categoria ? 'activo' : ''}`}
              onClick={() => setCategoriaSeleccionada(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>
      </div>
      
      {cargando ? (
        <div className="cargando">
          <p>Cargando productos...</p>
        </div>
      ) : (
        <>
          <h2 className="titulo-seccion">
            {categoriaSeleccionada === 'Todos' ? 'Todos los productos' : categoriaSeleccionada}
            <span className="contador-productos">({productosFiltrados.length})</span>
          </h2>
          
          {productosFiltrados.length === 0 ? (
            <p className="no-resultados">No se encontraron productos que coincidan con tu búsqueda.</p>
          ) : (
            <div className="productos-grid">
              {productosFiltrados.map(producto => (
                <div key={producto.id} className="producto-item">
                  <ProductoCard 
                    producto={producto} 
                    agregarAlCarrito={agregarAlCarrito} 
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ListaProductos;