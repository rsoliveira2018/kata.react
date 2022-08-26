import { render, screen } from '@testing-library/react';
import App from './App';

test('renders button', () => {
  render(<App />);
  const linkElement = screen.getByText(/click here/i);
  expect(linkElement).toBeInTheDocument();
});
