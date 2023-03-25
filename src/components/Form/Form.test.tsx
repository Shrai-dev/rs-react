import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

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
  it('Render Form elements: privacy-policy checkbox'),
    () => {
      render(<Form />);
      const privacyPolicy = screen.getByTestId('privacy-policy');

      expect(privacyPolicy).toBeInTheDocument();
    };
  it('Render Form elements: promo-notifications checkbox'),
    () => {
      render(<Form />);
      const promoNotifications = screen.getByTestId('promo-notifications');

      expect(promoNotifications).toBeInTheDocument();
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
});
