import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import React from 'react';
import { MemoryRouter } from 'react-router';

const mockData = {
  id: 3,
  title: 'Samsung Universe 9',
  description: "Samsung's new variant which goes beyond Galaxy to the Universe",
  price: 1249,
  discountPercentage: 15.46,
  rating: 4.09,
  stock: 36,
  brand: 'Samsung',
  category: 'smartphones',
  thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
  images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
};

describe('Card', () => {
  it('Render Card container', () => {
    render(
      <MemoryRouter>
        <Card card={mockData} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('card-container')).toBeInTheDocument();
  });
  it('Render Card title', () => {
    render(
      <MemoryRouter>
        <Card card={mockData} />
      </MemoryRouter>
    );

    const cardTitle = screen.getByText(/Samsung Universe 9/i);
    expect(cardTitle).toBeInTheDocument();
  });
  it('Render Card description', () => {
    render(
      <MemoryRouter>
        <Card card={mockData} />
      </MemoryRouter>
    );

    const cardDescription = screen.getByText(
      /Samsung's new variant which goes beyond Galaxy to the Universe/i
    );
    expect(cardDescription).toBeInTheDocument();
  });
  it('Render Card brand', () => {
    render(
      <MemoryRouter>
        <Card card={mockData} />
      </MemoryRouter>
    );

    const cardBrand = screen.getByText(/Brand: Samsung/);
    expect(cardBrand).toBeInTheDocument();
  });
  it('Render Card rating', () => {
    render(
      <MemoryRouter>
        <Card card={mockData} />
      </MemoryRouter>
    );

    const cardRating = screen.getByText(/4.09/i);
    expect(cardRating).toBeInTheDocument();
  });
  it('Render Card price', () => {
    render(
      <MemoryRouter>
        <Card card={mockData} />
      </MemoryRouter>
    );

    const cardPrice = screen.getByText(/1249/i);
    expect(cardPrice).toBeInTheDocument();
  });
  it('Render Card discount percentage', () => {
    render(
      <MemoryRouter>
        <Card card={mockData} />
      </MemoryRouter>
    );

    const cardDiscountPercentage = screen.getByText(/15.46/i);
    expect(cardDiscountPercentage).toBeInTheDocument();
  });
  it('Render Card stock', () => {
    render(
      <MemoryRouter>
        <Card card={mockData} />
      </MemoryRouter>
    );

    const cardStock = screen.getByText(/36/i);
    expect(cardStock).toBeInTheDocument();
  });
  it('Render Card button', () => {
    render(
      <MemoryRouter>
        <Card card={mockData} />
      </MemoryRouter>
    );

    const cardButton = screen.getByRole('button');
    expect(cardButton).toBeInTheDocument();
  });
});
