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
  it('Render Card title'),
    () => {
      render(
        <MemoryRouter>
          <Card
            title={mockData.title}
            brand={mockData.brand}
            category={mockData.category}
            description={mockData.description}
            discountPercentage={mockData.discountPercentage}
            id={mockData.id}
            images={mockData.images}
            price={mockData.price}
            rating={mockData.rating}
            stock={mockData.stock}
            thumbnail={mockData.thumbnail}
          />
        </MemoryRouter>
      );

      const cardTitle = screen.getByText(/Samsung Universe 9/i);
      expect(cardTitle).toBeInTheDocument();
    };
  it('Render Card container'),
    () => {
      render(
        <MemoryRouter>
          <Card
            title={mockData.title}
            brand={mockData.brand}
            category={mockData.category}
            description={mockData.description}
            discountPercentage={mockData.discountPercentage}
            id={mockData.id}
            images={mockData.images}
            price={mockData.price}
            rating={mockData.rating}
            stock={mockData.stock}
            thumbnail={mockData.thumbnail}
          />
        </MemoryRouter>
      );

      expect(screen.getByTestId('card-container')).toBeInTheDocument();
    };
});