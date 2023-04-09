import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import React from 'react';

describe('SearchBar', () => {
  it('Render SearchBar', () => {
    render(<SearchBar />);

    expect(screen.getByTestId('search-container')).toBeInTheDocument();
  });
  it('Render search input', () => {
    render(<SearchBar />);

    expect(screen.getByLabelText('search')).toBeInTheDocument();
  });
  it('Render search button', () => {
    render(<SearchBar />);

    expect(screen.getByTestId('search-btn')).toBeInTheDocument();
  });
});
