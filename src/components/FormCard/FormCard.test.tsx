import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormCard from './FormCard';

const mockData = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthday: '2004-05-06',
  country: 'Ukraine',
  promo: 'Yes',
  gender: 'Female',
  file: 'photo.png',
};

describe('FormCard', () => {
  it('Render FormCard', () => {
    render(
      <FormCard
        firstName={mockData.firstName}
        lastName={mockData.lastName}
        birthday={mockData.birthday}
        country={mockData.country}
        promo={true}
        gender={mockData.gender}
        file={mockData.file}
      />
    );
    const formCard = screen.getByTestId('formCard');

    expect(formCard).toBeInTheDocument();
  });
  it('Render FormCard with provided first and last names', () => {
    render(
      <FormCard
        firstName={mockData.firstName}
        lastName={mockData.lastName}
        birthday={mockData.birthday}
        country={mockData.country}
        promo={true}
        gender={mockData.gender}
        file={mockData.file}
      />
    );
    const formCardName = screen.getByTestId('formCard-name');

    expect(formCardName).toHaveTextContent(`${mockData.firstName} ${mockData.lastName}`);
  });
  it('Render FormCard with provided birthday', () => {
    render(
      <FormCard
        firstName={mockData.firstName}
        lastName={mockData.lastName}
        birthday={mockData.birthday}
        country={mockData.country}
        promo={true}
        gender={mockData.gender}
        file={mockData.file}
      />
    );
    const formCardBirthday = screen.getByTestId('formCard-birthday');

    expect(formCardBirthday).toHaveTextContent(`${mockData.birthday}`);
  });
  it('Render FormCard with provided country', () => {
    render(
      <FormCard
        firstName={mockData.firstName}
        lastName={mockData.lastName}
        birthday={mockData.birthday}
        country={mockData.country}
        promo={true}
        gender={mockData.gender}
        file={mockData.file}
      />
    );
    const formCardCountry = screen.getByTestId('formCard-country');

    expect(formCardCountry).toHaveTextContent(`${mockData.country}`);
  });
  it('Render FormCard with provided promo info', () => {
    render(
      <FormCard
        firstName={mockData.firstName}
        lastName={mockData.lastName}
        birthday={mockData.birthday}
        country={mockData.country}
        promo={true}
        gender={mockData.gender}
        file={mockData.file}
      />
    );
    const formCardPromo = screen.getByTestId('formCard-promo');

    expect(formCardPromo).toHaveTextContent('Yes');
  });
  it('Render FormCard with provided gender', () => {
    render(
      <FormCard
        firstName={mockData.firstName}
        lastName={mockData.lastName}
        birthday={mockData.birthday}
        country={mockData.country}
        promo={true}
        gender={mockData.gender}
        file={mockData.file}
      />
    );
    const formCardGender = screen.getByTestId('formCard-gender');

    expect(formCardGender).toHaveTextContent(`${mockData.gender}`);
  });
  it('Render FormCard with provided file path', () => {
    render(
      <FormCard
        firstName={mockData.firstName}
        lastName={mockData.lastName}
        birthday={mockData.birthday}
        country={mockData.country}
        promo={true}
        gender={mockData.gender}
        file={mockData.file}
      />
    );

    expect(screen.getByRole('img')).toHaveAttribute('src', `${mockData.file}`);
  });
});
