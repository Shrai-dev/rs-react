import React, { Component } from 'react';
import { FormData } from 'utils/types';
import './FormCard.scss';

export default class FormCard extends Component<FormData> {
  constructor(props: FormData | Readonly<FormData>) {
    super(props);
  }
  render() {
    return (
      <div className="form-card__wrapper">
        <h4 className="form-card__title">
          {this.props.firstName} {this.props.lastName}
        </h4>
        <p className="form-card__text">Birthday: {this.props.birthday}</p>
      </div>
    );
  }
}
