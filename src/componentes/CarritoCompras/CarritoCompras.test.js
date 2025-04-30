import { render, screen, fireEvent } from '@testing-library/react';
import CarritoCompras from './CarritoCompras';

const mockProductos = [
  {
    id: 1,
    nombre: 'Paracetamol 500mg',
    precio: 5.99,
    cantidad: 2,
    imagen: 'https://via.placeholder.com/300x200?text=Paracetamol'
  },
  {
    id: 2,
    nombre: 'Ibuprofeno 400mg',
    precio: 7.50,
    cantidad: 1,
    imagen: 'https://via.placeholder.com/300x200?text=Ibuprofeno'
  }
];

test('muestra mensaje cuando el carrito está vacío', () => {
  render(<CarritoCompras productos={[]} eliminarDelCarrito={() => {}} />);
  expect(screen.getByText('Tu carrito está vacío')).toBeInTheDocument();
});

test('muestra los productos en el carrito', () => {
  render(<CarritoCompras productos={mockProductos} eliminarDelCarrito={() => {}} />);
  
  expect(screen.getByText('Paracetamol 500mg')).toBeInTheDocument();
  expect(screen.getByText('Ibuprofeno 400mg')).toBeInTheDocument();
  expect(screen.getByText('$5.99 x 2')).toBeInTheDocument();
  expect(screen.getByText('$7.50 x 1')).toBeInTheDocument();
});

test('calcula el total correctamente', () => {
  render(<CarritoCompras productos={mockProductos} eliminarDelCarrito={() => {}} />);
  
  // Total debería ser (5.99 * 2) + (7.50 * 1) = 19.48
  expect(screen.getByText('$19.48')).toBeInTheDocument();
});

test('llama a eliminarDelCarrito cuando se hace clic en el botón eliminar', () => {
  const mockEliminarDelCarrito = jest.fn();
  render(<CarritoCompras productos={mockProductos} eliminarDelCarrito={mockEliminarDelCarrito} />);
  
  // Encontrar todos los botones de eliminar y hacer clic en el primero
  const botonesEliminar = screen.getAllByRole('button', { name: '' });
  fireEvent.click(botonesEliminar[0]);
  
  expect(mockEliminarDelCarrito).toHaveBeenCalledWith(1);
});