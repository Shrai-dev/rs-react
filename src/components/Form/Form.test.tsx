import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  it('Render Form'),
    () => {
      render(<Form />);
      const form = screen.getByTestId('react-form');

      expect(form).toBeInTheDocument();
    };
  it('Render Form elements: first name input'),
    () => {
      render(<Form />);
      const firstName = screen.getByTestId('first-name');
      expect(firstName).toBeInTheDocument();

      userEvent.type(firstName, 'abc');
      expect(firstName).toHaveValue('abc');
    };
  it('Render Form elements: last name input'),
    () => {
      render(<Form />);
      const lastName = screen.getByTestId('last-name');
      expect(lastName).toBeInTheDocument();

      userEvent.type(lastName, 'abc');
      expect(lastName).toHaveValue('abc');
    };
  it('Render Form elements: birthday input'),
    () => {
      render(<Form />);
      const birthday = screen.getByTestId('birthday');
      expect(birthday).toBeInTheDocument();

      userEvent.type(birthday, '2010-05-03');
      expect(birthday).toEqual('2010-05-03');
    };
  it('Render Form elements: country list'),
    () => {
      render(<Form />);
      const country = screen.getByTestId('country');

      expect(country).toBeInTheDocument();
    };
  it('Render Form elements: promo-notifications checkbox'),
    () => {
      render(<Form />);
      const promoNotifications = screen.getByTestId('promo-notifications');
      expect(promoNotifications).toBeInTheDocument();

      userEvent.click(promoNotifications);
      expect(promoNotifications).toHaveAttribute('checked', 'true');
    };
  it('Render Form elements: radio buttons'),
    () => {
      render(<Form />);
      const male = screen.getByTestId('gender-male');
      const female = screen.getByTestId('gender-female');

      expect(male).toBeInTheDocument();
      expect(female).toBeInTheDocument();
    };
  it('Render Form elements: file input'),
    () => {
      render(<Form />);
      const file = screen.getByTestId('file-upload');

      expect(file).toBeInTheDocument();
    };
  it('Render Form elements: submit button'),
    () => {
      render(<Form />);
      const submitButton = screen.getByTestId('submit-btn');

      expect(submitButton).toBeInTheDocument();
    };
  it('Check Form elements validation and shows error messages: empty form'),
    () => {
      render(<Form />);

      const firstNameError = screen.getByTestId('first-name-error');
      const lastNameError = screen.getByTestId('last-name-error');
      const birthdayError = screen.getByTestId('birthday-error');
      const countryError = screen.getByTestId('country-error');
      const promoError = screen.getByTestId('promo-error');
      const genderError = screen.getByTestId('gender-error');
      const fileUploadError = screen.getByTestId('file-upload-error');
      const submitButton = screen.getByTestId('submit-btn');

      userEvent.click(submitButton);

      expect(firstNameError).toHaveValue('The first name is required');
      expect(lastNameError).toHaveValue('The last name is required');
      expect(birthdayError).toHaveValue('The birthday is required');
      expect(countryError).toHaveValue('The country is required');
      expect(promoError).toHaveValue('The field is required');
      expect(genderError).toHaveValue('The gender is required');
      expect(fileUploadError).toHaveValue('The first name is required');
    };
  it('Check Form elements validation and shows error message: first name input'),
    () => {
      render(<Form />);
      const firstName = screen.getByTestId('first-name');
      const firstNameError = screen.getByTestId('first-name-error');
      const submitButton = screen.getByTestId('submit-btn');

      userEvent.type(firstName, 'abc');
      userEvent.click(submitButton);

      expect(firstNameError).toHaveValue('The first name should start from capital letter');
    };
  it('Check Form elements validation and shows error message: last name input'),
    () => {
      render(<Form />);
      const lastName = screen.getByTestId('last-name');
      const lastNameError = screen.getByTestId('last-name-error');
      const submitButton = screen.getByTestId('submit-btn');

      userEvent.type(lastName, 'abc');
      userEvent.click(submitButton);
      expect(lastNameError).toHaveValue('The last name should start from capital letter');
    };
  it('Check Form elements validation and shows alert message'),
    () => {
      render(<Form />);
      const firstName = screen.getByTestId('first-name');
      const lastName = screen.getByTestId('last-name');
      const birthday = screen.getByTestId('birthday');
      const country = screen.getByTestId('country');
      const promo = screen.getByTestId('promo');
      const gender = screen.getByTestId('gender');
      const fileUpload = screen.getByTestId('file-upload');
      const submitButton = screen.getByTestId('submit-btn');

      userEvent.type(firstName, `${mockData.firstName}`);
      userEvent.type(lastName, `${mockData.lastName}`);
      userEvent.type(birthday, `${mockData.birthday}`);
      userEvent.type(country, `${mockData.country}`);
      userEvent.type(promo, `${mockData.promo}`);
      userEvent.type(gender, `${mockData.gender}`);
      userEvent.type(fileUpload, `${mockData.file}`);

      userEvent.click(submitButton);
      expect(window.alert).toHaveBeenCalledWith('Thank you! The data has been saved');
    };
});
