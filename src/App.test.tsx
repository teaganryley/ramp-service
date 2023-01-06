import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Smoke test
test('Smoke test: renders heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/RAMP service test/i);
  expect(linkElement).toBeInTheDocument();
});

// Test 1: loadScript throws an error when an invalid url is supplied
// Test 2: loadScript resolves when a valid url is supplied


/*
it('fails to load a script', async () => {
  expect.assertions(1);
  try {
    await loadScript('/scripts/nonsenseUrl');
  } catch (e) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(e).toMatch('error');
  }

});

it('succeeds loading RAMP script', async () => {
  
});
*/
