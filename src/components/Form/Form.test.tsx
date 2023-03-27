import React from 'react';
import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';
import userEvent from '@testing-library/user-event';

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
  it('Change Form elements: enter valid first name and error message is empty', async () => {
    render(<Form />);

    const firstName = screen.getByLabelText('first-name');
    const firstNameError = screen.getByTestId('first-name-error');
    const submitButton = screen.getByTestId('submit-btn');

    fireEvent.change(firstName, { target: { value: 'Jane' } });
    await userEvent.click(submitButton);

    expect(firstNameError).toBeEmptyDOMElement();
  });
  it('Change Form elements: enter invalid first name and get error message', async () => {
    render(<Form />);

    const firstName = screen.getByLabelText('first-name');
    const firstNameError = screen.getByTestId('first-name-error');
    const submitButton = screen.getByTestId('submit-btn');

    fireEvent.change(firstName, { target: { value: 'abc' } });
    await userEvent.click(submitButton);

    expect(firstNameError).toHaveTextContent('The first name should start from capital letter');
  });
  it('Change Form elements: enter valid last name and error message is empty', async () => {
    render(<Form />);

    const lastName = screen.getByLabelText('last-name');
    const lastNameError = screen.getByTestId('last-name-error');
    const submitButton = screen.getByTestId('submit-btn');

    fireEvent.change(lastName, { target: { value: 'Doe' } });
    await userEvent.click(submitButton);

    expect(lastNameError).toBeEmptyDOMElement();
  });
  it('Change Form elements: enter invalid last name and get error message', async () => {
    render(<Form />);

    const lastName = screen.getByLabelText('last-name');
    const lastNameError = screen.getByTestId('last-name-error');
    const submitButton = screen.getByTestId('submit-btn');

    fireEvent.change(lastName, { target: { value: 'abc' } });
    await userEvent.click(submitButton);

    expect(lastNameError).toHaveTextContent('The last name should start from capital letter');
  });
});
