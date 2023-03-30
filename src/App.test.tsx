import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
import React from 'react';

describe('App', () => {
  it('Render Main page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  it('Render About Us page', () => {
    render(
      <MemoryRouter initialEntries={['/about-us']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('About Us');
  });
  it('Render Form page', () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <App />
      </MemoryRouter>
    );

    const form = screen.getByTestId('react-form');
    expect(form).toBeInTheDocument();
  });
  it('Render Not Found page', () => {
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
  });
});
