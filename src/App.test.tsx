import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
import React from 'react';

describe('App', () => {
  it('Render Not Found page',
    () => {
      render(
        <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
          <App />
        </MemoryRouter>
      );
      expect(
        screen.getByRole('heading', {
          level: 2,
        })
      ).toHaveTextContent('Page not found');
    })
});
