import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renderiza el título de la farmacia', () => {
  render(<Header cantidadProductos={0} toggleCarrito={() => {}} />);
  const titleElement = screen.getByText(/FarmaReact/i);
  expect(titleElement).toBeInTheDocument();
});

test('muestra el contador del carrito cuando hay productos', () => {
  render(<Header cantidadProductos={5} toggleCarrito={() => {}} />);
  const counterElement = screen.getByText('5');
  expect(counterElement).toBeInTheDocument();
});

test('no muestra el contador del carrito cuando está vacío', () => {
  render(<Header cantidadProductos={0} toggleCarrito={() => {}} />);
  const counterElement = screen.queryByText('0');
  expect(counterElement).not.toBeInTheDocument();
});