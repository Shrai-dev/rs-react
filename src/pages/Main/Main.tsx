import SearchBar from '../../components/SearchBar/SearchBar';
import React, { FC } from 'react';
import { data } from '../../utils/data';
import Card from '../../components/Card/Card';
import './Main.scss';

const Main: FC = () => {
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
};

export default Main;
