import React, { FC } from 'react';
import Card from '../../components/Card/Card';
import { MoviesProps } from 'utils/types';
import './CardList.scss';

const CardList: FC<MoviesProps> = ({ movies }) => {
  const cards = movies.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <section className="cards__wrapper" data-testid="cards-wrapper">
      {cards}
    </section>
  );
};

export default CardList;
