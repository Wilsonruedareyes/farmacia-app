import { render, screen, waitFor } from '@testing-library/react';
import ListaProductos from './ListaProductos';

// Mock del temporizador para evitar esperas reales en las pruebas
jest.useFakeTimers();

test('muestra mensaje de carga inicialmente', () => {
  render(<ListaProductos agregarAlCarrito={() => {}} />);
  expect(screen.getByText(/Cargando productos/i)).toBeInTheDocument();
});

test('muestra productos después de cargar', async () => {
  render(<ListaProductos agregarAlCarrito={() => {}} />);
  
  // Avanzar el temporizador para simular la carga completa
  jest.advanceTimersByTime(1000);
  
  await waitFor(() => {
    expect(screen.getByText('Paracetamol 500mg')).toBeInTheDocument();
    expect(screen.getByText('Ibuprofeno 400mg')).toBeInTheDocument();
  });
});

test('muestra el contador de productos correctamente', async () => {
  render(<ListaProductos agregarAlCarrito={() => {}} />);
  
  // Avanzar el temporizador para simular la carga completa
  jest.advanceTimersByTime(1000);
  
  await waitFor(() => {
    // Debería mostrar el total de productos (8 en nuestro caso de ejemplo)
    expect(screen.getByText('(8)')).toBeInTheDocument();
  });
});