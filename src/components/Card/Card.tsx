import React, { Component } from 'react';
import { CardData } from '../../utils/types';
import './Card.scss';

export default class Card extends Component<CardData> {
  constructor(props: CardData) {
    super(props);
  }
  render() {
    return (
      <div className="card__item" data-testid="card-container">
        <div className="card__item-img">
          <img className="card__img" src={this.props.images[0]} alt={this.props.title} />
        </div>
        <h3 className="card__item-title">{this.props.title}</h3>
        <h4 className="card__item-subtitle">Brand: {this.props.brand}</h4>
        <p className="card__item-desc">{this.props.description}</p>
        <div className="card__item-details">
          <p className="card__item-info">Rating: {this.props.rating}</p>
          <p className="card__item-info">Price: ${this.props.price}</p>
          <p className="card__item-info">Discount: {this.props.discountPercentage}%</p>
          <p className="card__item-info">Stock: {this.props.stock}</p>
        </div>
        <button className="card__item-btn">Show more</button>
      </div>
    );
  }
}
