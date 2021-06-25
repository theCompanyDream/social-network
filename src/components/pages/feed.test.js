import { render, screen } from '@testing-library/react';
import { Feed } from '.';

test('Displays post feed', () => {
  render(<Feed />);
  const linkElement = screen;
  expect(linkElement).toBeInTheDocument();
});
