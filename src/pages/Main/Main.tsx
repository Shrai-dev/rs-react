import SearchBar from '../../components/SearchBar/SearchBar';
import React, { Component } from 'react';
import { data } from '../../utils/data';
import Card from '../../components/Card/Card';
import './Main.scss';

export default class Main extends Component {
  render() {
    const cards = data.map((item) => {
      return <Card key={item.id} card={item} />;
    });
    return (
      <main className="main">
        <SearchBar />
        <div className="cards__wrapper" data-testid="cards-wrapper">
          {cards}
        </div>
      </main>
    );
  }
}
