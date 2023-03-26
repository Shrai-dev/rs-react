import React, { Component } from 'react';
import { CardData } from '../../utils/types';
import './Card.scss';

export default class Card extends Component<{ card: CardData }> {
  constructor(props: { card: CardData }) {
    super(props);
  }
  render() {
    return (
      <div className="card__item" data-testid="card-container">
        <div className="card__item-img">
          <img className="card__img" src={this.props.card.images[0]} alt={this.props.card.title} />
        </div>
        <h3 className="card__item-title">{this.props.card.title}</h3>
        <h4 className="card__item-subtitle">Brand: {this.props.card.brand}</h4>
        <p className="card__item-desc">{this.props.card.description}</p>
        <div className="card__item-details">
          <p className="card__item-info">Rating: {this.props.card.rating}</p>
          <p className="card__item-info">Price: ${this.props.card.price}</p>
          <p className="card__item-info">Discount: {this.props.card.discountPercentage}%</p>
          <p className="card__item-info">Stock: {this.props.card.stock}</p>
        </div>
        <button className="card__item-btn">Show more</button>
      </div>
    );
  }
}
