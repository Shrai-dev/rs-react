import React from 'react';
import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';

const mockData = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthday: '2004-05-06',
  country: 'Ukraine',
  promo: 'Yes',
  gender: 'Female',
  file: 'photo.png',
};

describe('Form', () => {
  it('Render Form', () => {
    render(<Form />);
    const form = screen.getByTestId('react-form');

    expect(form).toBeInTheDocument();
  });
  it('Render Form elements: first name input', () => {
    render(<Form />);
    const firstName = screen.getByTestId('first-name');
    expect(firstName).toBeInTheDocument();
  });
  it('Render Form elements: last name input', () => {
    render(<Form />);
    const lastName = screen.getByTestId('last-name');
    expect(lastName).toBeInTheDocument();
  });
  it('Render Form elements: birthday input', () => {
    render(<Form />);
    const birthday = screen.getByTestId('birthday');
    expect(birthday).toBeInTheDocument();
  });
  it('Render Form elements: country list', () => {
    render(<Form />);
    const country = screen.getByTestId('country');

    expect(country).toBeInTheDocument();
  });
  it('Render Form elements: promo-notifications checkbox', () => {
    render(<Form />);
    const promoNotifications = screen.getByTestId('promo-notifications');
    expect(promoNotifications).toBeInTheDocument();
  });
  it('Render Form elements: radio buttons', () => {
    render(<Form />);
    const male = screen.getByTestId('gender-male');
    const female = screen.getByTestId('gender-female');

    expect(male).toBeInTheDocument();
    expect(female).toBeInTheDocument();
  });
  it('Render Form elements: file input', () => {
    render(<Form />);
    const file = screen.getByTestId('file-upload');

    expect(file).toBeInTheDocument();
  });
  it('Render Form elements: submit button', () => {
    render(<Form />);
    const submitButton = screen.getByTestId('submit-btn');

    expect(submitButton).toBeInTheDocument();
  });
  it('Render Form elements: first name input', () => {
    render(<Form />);
    const firstName = screen.getByLabelText('first-name');
    fireEvent.change(firstName, { target: { value: 'abc' } });
    expect(screen.getByDisplayValue('abc')).toBeInTheDocument();
  });
});
