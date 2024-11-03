import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AI Blog Post Generator heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/AI Blog Post Generator/i);
  expect(headingElement).toBeInTheDocument();
});
