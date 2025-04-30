import { render, screen, fireEvent } from '@testing-library/react';
import ProductoCard from './ProductoCard';

const mockProducto = {
  id: 1,
  nombre: 'Paracetamol',
  descripcion: 'Analgésico y antipirético',
  precio: 5.99,
  imagen: 'https://ejemplo.com/paracetamol.jpg',
  categoria: 'Analgésicos'
};

test('renderiza la información del producto correctamente', () => {
  render(<ProductoCard producto={mockProducto} agregarAlCarrito={() => {}} />);
  
  expect(screen.getByText('Paracetamol')).toBeInTheDocument();
  expect(screen.getByText('Analgésico y antipirético')).toBeInTheDocument();
  expect(screen.getByText('$5.99')).toBeInTheDocument();
  expect(screen.getByText('Analgésicos')).toBeInTheDocument();
});

test('llama a agregarAlCarrito cuando se hace clic en el botón', () => {
  const mockAgregarAlCarrito = jest.fn();
  render(<ProductoCard producto={mockProducto} agregarAlCarrito={mockAgregarAlCarrito} />);
  
  fireEvent.click(screen.getByText('Agregar al carrito'));
  expect(mockAgregarAlCarrito).toHaveBeenCalledWith(mockProducto);
});