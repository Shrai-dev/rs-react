import React, { Component, createRef } from 'react';
import FormCard from '../../FormCard/FormCard';
import { FormData, FormState, ValidationErrors } from '../../utils/types';
import './Form.scss';

export default class Form extends Component<Record<string, never>, FormState> {
  firstNameInput: React.RefObject<HTMLInputElement>;
  lastNameInput: React.RefObject<HTMLInputElement>;
  birthdayInput: React.RefObject<HTMLInputElement>;
  countryInput: React.RefObject<HTMLSelectElement>;
  checkboxInput: React.RefObject<HTMLInputElement>;
  maleRadioInput: React.RefObject<HTMLInputElement>;
  femaleRadioInput: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;

  formDataObj: FormData;
  formDataArr: FormData[] = [];

  constructor(props: Record<string, never> | Readonly<Record<string, never>>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);

    this.firstNameInput = createRef();
    this.lastNameInput = createRef();
    this.birthdayInput = createRef();
    this.countryInput = createRef();
    this.checkboxInput = createRef();
    this.maleRadioInput = createRef();
    this.femaleRadioInput = createRef();
    this.fileInput = createRef();
    this.state = {
      errors: {},
      isFormDataValid: false,
    };
    this.formDataObj = {
      firstName: this.firstNameInput.current?.value as string,
      lastName: this.lastNameInput.current?.value as string,
      birthday: this.birthdayInput.current?.value as string,
      country: this.checkboxInput.current?.value as string,
      promo: this.checkboxInput.current?.checked as boolean,
      gender:
        (this.maleRadioInput.current?.id as string) ||
        (this.femaleRadioInput.current?.id as string),
      file: this.fileInput.current?.value as string,
    };
  }

  handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    const firstNameInputText = this.firstNameInput.current;
    const lastNameInputText = this.lastNameInput.current;
    const birthdayInputText = this.birthdayInput.current;
    const countryInputText = this.countryInput.current;
    const checkboxInputInfo = this.checkboxInput.current;
    const radioBtnArr: HTMLInputElement[] = [
      this.maleRadioInput.current as HTMLInputElement,
      this.femaleRadioInput.current as HTMLInputElement,
    ];
    const fileInputSrc = this.fileInput.current;

    if (this.validateForm()) {
      this.formDataObj = {
        firstName: firstNameInputText?.value as string,
        lastName: lastNameInputText?.value as string,
        birthday: birthdayInputText?.value as string,
        country: countryInputText?.value as string,
        promo: checkboxInputInfo?.checked as boolean,
        gender: radioBtnArr.find((el) => el.checked)?.id as string,
        file: fileInputSrc?.value as string,
      };
      this.formDataArr.push(this.formDataObj);
      alert('Thank you! The data has been saved');
      this.setState((prevState) => ({ ...prevState, isFormDataValid: false }));
      this.handleReset();
    }
  }

  validateForm(): boolean {
    const errors: ValidationErrors = {};
    let isValid = true;
    const firstNameInputText = this.firstNameInput.current?.value as string;
    const lastNameInputText = this.lastNameInput.current?.value as string;
    const birthdayInputText = this.birthdayInput.current?.value as string;
    const countryInputText = this.countryInput.current?.value as string;
    const checkboxInputInfo = this.checkboxInput.current?.checked;
    const radioBtnArr: HTMLInputElement[] = [
      this.maleRadioInput.current as HTMLInputElement,
      this.femaleRadioInput.current as HTMLInputElement,
    ];
    const fileInputSrc = this.fileInput.current?.files;

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

    if (countryInputText === '') {
      isValid = false;
      errors.country = 'The country is required';
    } else {
      errors.country = '';
    }

    if (!checkboxInputInfo) {
      isValid = false;
      errors.promo = 'The field is required';
    } else {
      errors.promo = '';
    }

    if (!radioBtnArr.find((el) => el.checked)) {
      isValid = false;
      errors.gender = 'The gender is required';
    } else {
      errors.gender = '';
    }

    if (!fileInputSrc!.length) {
      isValid = false;
      errors.file = 'The file upload is required';
    } else {
      errors.file = '';
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
    this.countryInput.current!.value = '';
    this.checkboxInput.current!.checked = false;
    this.maleRadioInput.current!.checked = false;
    this.femaleRadioInput.current!.checked = false;
    this.fileInput.current!.value = '';
  }

  render() {
    const formCards = this.formDataArr.map((card, idx) => {
      return (
        <FormCard
          key={idx + card.firstName!}
          firstName={card.firstName}
          lastName={card.lastName}
          birthday={card.birthday}
          country={card.country}
          promo={card.promo}
          gender={card.gender}
          file={card.file}
        />
      );
    });

    return (
      <div className="form__container" data-testid="react-form">
        <form className="form" onSubmit={this.handleSubmit}>
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
              <p className="error" data-testid="first-name-error">
                {this.state.errors.firstName}
              </p>
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
              <label className="form__data-label" htmlFor="country">
                Country:
                <select
                  className="form__data-select"
                  name="country"
                  data-testid="country"
                  ref={this.countryInput}
                >
                  <option value="">Choose country</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="Spain">Spain</option>
                  <option value="France">France</option>
                  <option value="Great Britain">Great Britain</option>
                </select>
              </label>
              <p className="error">{this.state.errors.country}</p>
              <label className="form__data-label" htmlFor="promo-notifications">
                <input
                  className="form__data-checkbox"
                  type="checkbox"
                  name="promo-notifications"
                  ref={this.checkboxInput}
                  data-testid="promo-notifications"
                />
                I agree to subscribe to newsletters
              </label>
              <p className="error">{this.state.errors.promo}</p>
            </div>
            <div className="form__data">
              <label className="form__data-label" htmlFor="gender">
                <input
                  className="form__data-radio"
                  type="radio"
                  name="gender"
                  id="male"
                  data-testid="gender-male"
                  ref={this.maleRadioInput}
                />
                <span className="form__data-span male">Male</span>
                <input
                  className="form__data-radio"
                  type="radio"
                  name="gender"
                  id="female"
                  data-testid="gender-female"
                  ref={this.femaleRadioInput}
                />
                <span className="form__data-span female">Female</span>
              </label>
            </div>
            <p className="error">{this.state.errors.gender}</p>
            <input type="file" name="fileUpload" ref={this.fileInput} data-testid="file-upload" />
            <p className="error">{this.state.errors.file}</p>
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
