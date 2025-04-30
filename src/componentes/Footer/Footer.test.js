import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renderiza el nombre de la farmacia', () => {
  render(<Footer />);
  expect(screen.getByText('FarmaReact')).toBeInTheDocument();
});

test('muestra el año actual en el copyright', () => {
  render(<Footer />);
  const currentYear = new Date().getFullYear().toString();
  expect(screen.getByText(new RegExp(`© ${currentYear} FarmaReact`))).toBeInTheDocument();
});

test('muestra la información de contacto', () => {
  render(<Footer />);
  expect(screen.getByText(/Av. Principal #123, Ciudad/i)).toBeInTheDocument();
  expect(screen.getByText(/\(123\) 456-7890/i)).toBeInTheDocument();
  expect(screen.getByText(/info@farmareact.com/i)).toBeInTheDocument();
});