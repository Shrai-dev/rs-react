import React, { Component } from 'react';
import { FormData } from 'utils/types';
import './FormCard.scss';

export default class FormCard extends Component<FormData> {
  constructor(props: FormData | Readonly<FormData>) {
    super(props);
  }
  render() {
    return (
      <div className="form-card__wrapper" data-testid="formCard">
        <h4 className="form-card__title" data-testid="formCard-name">
          {this.props.firstName} {this.props.lastName}
        </h4>
        <p className="form-card__text" data-testid="formCard-birthday">
          Birthday: {this.props.birthday}
        </p>
        <p className="form-card__text" data-testid="formCard-country">
          Country: {this.props.country}
        </p>
        <p className="form-card__text" data-testid="formCard-promo">
          Agree to subscribe to newsletters: {this.props.promo ? 'Yes' : 'No'}
        </p>
        <p className="form-card__text" data-testid="formCard-gender">
          Gender: {this.props.gender}
        </p>

        <p className="form-card__text" data-testid="formCard-file">
          Path to file: {this.props.file}
        </p>
      </div>
    );
  }
}
