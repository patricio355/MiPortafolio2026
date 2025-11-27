import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('muestra el título de proyectos', () => {
    render(<App />);
    expect(screen.getByText(/mis proyectos/i)).toBeInTheDocument();
  });
});
