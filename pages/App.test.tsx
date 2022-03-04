import React from 'react';
import { render, screen } from '@testing-library/react';
import _app from './_app.tsx';

test('renders learn react link', () => {
  render(<_app />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
