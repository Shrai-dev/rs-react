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
  it('Render Form', () => {
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
    const formCardName = screen.getByTestId('formCard-name');
    const formCardBirthday = screen.getByTestId('formCard-birthday');
    const formCardCountry = screen.getByTestId('formCard-country');
    const formCardPromo = screen.getByTestId('formCard-promo');
    const formCardGender = screen.getByTestId('formCard-gender');
    const formCardFile = screen.getByTestId('formCard-file');

    expect(formCard).toBeInTheDocument();
    expect(formCardName).toHaveTextContent(`${mockData.firstName} ${mockData.lastName}`);
    expect(formCardBirthday).toHaveTextContent(`${mockData.birthday}`);
    expect(formCardCountry).toHaveTextContent(`${mockData.country}`);
    expect(formCardPromo).toHaveTextContent(`Yes`);
    expect(formCardGender).toHaveTextContent(`${mockData.gender}`);
    expect(formCardFile).toHaveTextContent(`${mockData.file}`);
  });
});
