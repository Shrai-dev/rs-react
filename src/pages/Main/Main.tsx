import SearchBar from '../../components/SearchBar/SearchBar';
import React, { Component } from 'react';
import { data } from '../../utils/data';
import Card from '../../components/Card/Card';
import './Main.scss';

export default class Main extends Component {
  render() {
    const cards = data.map((item) => {
      return (
        <Card
          key={item.id}
          title={item.title}
          brand={item.brand}
          category={item.category}
          description={item.description}
          discountPercentage={item.discountPercentage}
          id={item.id}
          images={item.images}
          price={item.price}
          rating={item.rating}
          stock={item.stock}
          thumbnail={item.thumbnail}
        />
      );
    });
    return (
      <main className="main">
        <SearchBar />
        <div className="cards__wrapper">{cards}</div>
      </main>
    );
  }
}
