import React, { FC } from 'react';
import { CardProps } from '../../utils/types';
import './Card.scss';

const Card: FC<CardProps> = (props) => {
  return (
    <div className="card__item" data-testid="card-container">
      <div className="card__item-img">
        <img className="card__img" src={props.card.images[0]} alt={props.card.title} />
      </div>
      <h3 className="card__item-title">{props.card.title}</h3>
      <h4 className="card__item-subtitle">Brand: {props.card.brand}</h4>
      <p className="card__item-desc">{props.card.description}</p>
      <div className="card__item-details">
        <p className="card__item-info">Rating: {props.card.rating}</p>
        <p className="card__item-info">Price: ${props.card.price}</p>
        <p className="card__item-info">Discount: {props.card.discountPercentage}%</p>
        <p className="card__item-info">Stock: {props.card.stock}</p>
      </div>
      <button className="card__item-btn">Show more</button>
    </div>
  );
};

export default Card;
