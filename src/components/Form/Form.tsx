import FormCard from '../../FormCard/FormCard';
import React, { Component, createRef } from 'react';
import { FormData, FormState, ValidationErrors } from '../../utils/types';
import './Form.scss';

export default class Form extends Component<{}, FormState> {
  form: React.RefObject<HTMLFormElement>;
  firstNameInput: React.RefObject<HTMLInputElement>;
  lastNameInput: React.RefObject<HTMLInputElement>;
  birthdayInput: React.RefObject<HTMLInputElement>;

  formDataObj: { firstName: string; lastName: string; birthday: string };
  formDataArr: FormData[] = [];

  constructor(props: FormData | Readonly<FormData>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);

    this.form = createRef();
    this.firstNameInput = createRef();
    this.lastNameInput = createRef();
    this.birthdayInput = createRef();
    this.state = {
      errors: {},
      isFormDataValid: false,
    };
    this.formDataObj = {
      firstName: this.firstNameInput.current?.value as string,
      lastName: this.lastNameInput.current?.value as string,
      birthday: this.birthdayInput.current?.value as string,
    };
  }

  handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    const firstNameInputText = this.firstNameInput.current;
    const lastNameInputText = this.lastNameInput.current;
    const birthdayInputText = this.birthdayInput.current;

    if (this.validateForm()) {
      this.formDataObj = {
        firstName: firstNameInputText?.value as string,
        lastName: lastNameInputText?.value as string,
        birthday: birthdayInputText?.value as string,
      };
      this.formDataArr.push(this.formDataObj);
      this.setState((prevState) => ({ ...prevState, isFormDataValid: false }));
      this.handleReset();
      console.log(this.formDataArr, birthdayInputText?.value);
    }
  }

  validateForm(): boolean {
    const errors: ValidationErrors = {};
    let isValid = true;
    const firstNameInputText = this.firstNameInput.current?.value as string;
    const lastNameInputText = this.lastNameInput.current?.value as string;
    const birthdayInputText = this.birthdayInput.current?.value as string;

    if (!firstNameInputText.length) {
      isValid = false;
      errors.firstName = 'The first name is required';
    } else if (!/[A-Z]/.test(firstNameInputText.charAt(0))) {
      isValid = false;
      errors.firstName = 'The first name should start from capital letter';
    } else {
      errors.firstName = '';
    }

    if (!lastNameInputText.length) {
      isValid = false;
      errors.lastName = 'The last name is required';
    } else if (!/[A-Z]/.test(lastNameInputText.charAt(0))) {
      isValid = false;
      errors.lastName = 'The last name should start from capital letter';
    } else {
      errors.lastName = '';
    }

    if (!birthdayInputText.length) {
      isValid = false;
      errors.birthday = 'The birthday is required';
    } else {
      errors.birthday = '';
    }

    this.setState((prevState) => ({ ...prevState, errors }));
    isValid
      ? this.setState((prevState) => ({ ...prevState, isFormDataValid: true }))
      : this.setState((prevState) => ({ ...prevState, isFormDataValid: false }));
    return isValid;
  }

  handleReset() {
    this.firstNameInput.current!.value = '';
    this.lastNameInput.current!.value = '';
    this.birthdayInput.current!.value = '';
  }

  render() {
    const formCards = this.formDataArr.map((card, idx) => {
      console.log(card);
      return (
        <FormCard
          key={idx + card.firstName}
          firstName={card.firstName}
          lastName={card.lastName}
          birthday={card.birthday}
        />
      );
    });
    return (
      <div className="form__container" data-testid="react-form">
        <form className="form" onSubmit={this.handleSubmit} ref={this.form}>
          <div className="form__wrapper">
            <div className="form__data">
              <label className="form__data-label" htmlFor="first-name">
                First name:
                <input
                  className="form__data-input"
                  type="text"
                  name="first-name"
                  ref={this.firstNameInput}
                  data-testid="first-name"
                />
              </label>
              <p className="error">{this.state.errors.firstName}</p>
              <label className="form__data-label" htmlFor="last-name">
                Last name:
                <input
                  className="form__data-input"
                  type="text"
                  name="last-name"
                  ref={this.lastNameInput}
                  data-testid="last-name"
                />
              </label>
              <p className="error">{this.state.errors.lastName}</p>
              <label className="form__data-label" htmlFor="birthday">
                Date of birth:
                <input
                  className="form__data-input"
                  type="date"
                  name="birthday"
                  ref={this.birthdayInput}
                  data-testid="birthday"
                />
              </label>
              <p className="error">{this.state.errors.birthday}</p>
              <label htmlFor="country">
                Country:
                <select name="country" data-testid="country">
                  <option value="Ukraine">Ukraine</option>
                  <option value="Poland">Spain</option>
                  <option value="France">France</option>
                  <option value="Great Britain">Great Britain</option>
                </select>
              </label>
              <label htmlFor="promo-notifications">
                <input
                  type="checkbox"
                  name="promo-notifications"
                  id="promo-notifications"
                  data-testid="promo-notifications"
                />
                I agree to receive newsletters
              </label>
            </div>
            <div className="form__data">
              <label htmlFor="gender">
                <input type="radio" name="gender" data-testid="gender-male" /> <span>Male</span>
                <input type="radio" name="gender" data-testid="gender-female" /> <span>Female</span>
              </label>
            </div>
            <input type="file" name="fileUpload" data-testid="file-upload" />
            <button className="form__submit-btn" data-testid="submit-btn">
              Submit
            </button>
          </div>
        </form>
        <div className="form__cards">{this.formDataArr.length ? formCards : ''}</div>
      </div>
    );
  }
}
