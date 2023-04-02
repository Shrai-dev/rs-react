import React, { FC, useEffect, useState } from 'react';
import FormCard from '../FormCard/FormCard';
import { FormData } from '../../utils/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import './Form.scss';

const Form: FC = () => {
  const [formDataList, setFormDataList] = useState<FormData[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  useEffect(() => {
    reset({
      firstName: '',
      lastName: '',
      birthday: '',
      country: '',
      promo: false,
      gender: '',
      file: '',
    });
  }, [formDataList, reset]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setFormDataList((prevState) => [...prevState, data]);
    alert('Thank you! The data has been saved');
  };

  const formCards = formDataList.map((card, idx) => {
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
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__wrapper">
          <div className="form__data">
            <label className="form__data-label" htmlFor="first-name">
              First name:
              <input
                className="form__data-input"
                type="text"
                id="first-name"
                {...register('firstName', { required: 'The first name is required', minLength: 3 })}
                aria-label="first-name"
                data-testid="first-name"
              />
            </label>
            {errors.firstName && (
              <p className="error" data-testid="first-name-error">
                {errors.firstName.message}
              </p>
            )}
            <label className="form__data-label" htmlFor="last-name">
              Last name:
              <input
                className="form__data-input"
                type="text"
                id="last-name"
                {...register('lastName', { required: 'The last name is required', minLength: 3 })}
                aria-label="last-name"
                data-testid="last-name"
              />
            </label>
            {errors.lastName && (
              <p className="error" data-testid="last-name-error">
                {errors.lastName.message}
              </p>
            )}
            <label className="form__data-label" htmlFor="birthday">
              Date of birth:
              <input
                className="form__data-input"
                type="date"
                id="birthday"
                {...register('birthday', { required: 'The birthday is required' })}
                data-testid="birthday"
              />
            </label>
            {errors.birthday && (
              <p className="error" data-testid="birthday-error">
                {errors.birthday.message}
              </p>
            )}
            <label className="form__data-label" htmlFor="country">
              Country:
              <select
                className="form__data-select"
                id="country"
                data-testid="country"
                {...register('country', { required: 'The country is required' })}
              >
                <option value="">Choose country</option>
                <option value="Ukraine">Ukraine</option>
                <option value="Spain">Spain</option>
                <option value="France">France</option>
                <option value="Great Britain">Great Britain</option>
              </select>
            </label>
            {errors.country && (
              <p className="error" data-testid="country-error">
                {errors.country.message}
              </p>
            )}
            <label className="form__data-label" htmlFor="promo-notifications">
              <input
                className="form__data-checkbox"
                type="checkbox"
                id="promo-notifications"
                data-testid="promo-notifications"
                {...register('promo', { required: 'The promo field is required' })}
              />
              I agree to subscribe to newsletters
            </label>
            {errors.promo && (
              <p className="error" data-testid="promo-error">
                {errors.promo.message}
              </p>
            )}
          </div>
          <div className="form__data">
            <label className="form__data-label" htmlFor="gender">
              Gender:
              <input
                className="form__data-radio"
                type="radio"
                id="male"
                value="male"
                data-testid="gender-male"
                {...register('gender', { required: 'The gender is required' })}
              />
              <span className="form__data-span male">Male</span>
              <input
                className="form__data-radio"
                type="radio"
                id="female"
                value="female"
                data-testid="gender-female"
                {...register('gender', { required: 'The gender is required' })}
              />
              <span className="form__data-span female">Female</span>
            </label>
          </div>
          {errors.gender && (
            <p className="error" data-testid="gender-error">
              {errors.gender.message}
            </p>
          )}
          <input
            type="file"
            id="fileUpload"
            {...register('file', { required: 'The file is required' })}
            data-testid="file-upload"
          />
          {errors.file && (
            <p className="error" data-testid="file-error">
              {errors.file.message}
            </p>
          )}
          <button className="form__submit-btn" data-testid="submit-btn">
            Submit
          </button>
        </div>
      </form>
      <div className="form__cards">{formCards}</div>
    </div>
  );
};

export default Form;
