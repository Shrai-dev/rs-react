import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Main from './Main';
import React from 'react';

describe('Main', () => {
  it('Render Main'),
    () => {
      render(<Main />);

      expect(screen.getByRole('main')).toBeInTheDocument();
    };
  it('Render Cards List'),
    () => {
      render(<Main />);

      expect(screen.getAllByTestId('card-container')).toHaveLength(20);
    };
  it('Render Cards wrapper'),
    () => {
      render(<Main />);

      expect(screen.getByTestId('cards-wrapper')).toBeInTheDocument();
    };
  it('Render search input'),
    () => {
      render(<Main />);

      expect(screen.getByRole('input')).toBeInTheDocument();
    };
});
