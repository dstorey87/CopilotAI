import { render, screen, fireEvent } from '@testing-library/react';
import ContentGenerator from './ContentGenerator';

test('generates content on button click', async () => {
  render(<ContentGenerator />);
  const inputElement = screen.getByPlaceholderText(/Enter a topic/i);
  const buttonElement = screen.getByText(/Generate Content/i);

  fireEvent.change(inputElement, { target: { value: 'Test Topic' } });
  fireEvent.click(buttonElement);

  const contentElement = await screen.findByText(/Generated Content/i);
  expect(contentElement).toBeInTheDocument();
});