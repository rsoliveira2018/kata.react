import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Run Again button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Run Again/i);
  expect(linkElement).toBeInTheDocument();
});