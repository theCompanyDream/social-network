import { render, screen } from '@testing-library/react';
import { Comment } from './';

test('renders learn react link', () => {
  render(<Comment />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
