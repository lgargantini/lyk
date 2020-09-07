import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders Learn React Link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
