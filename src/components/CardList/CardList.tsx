import React, { FC, useState } from 'react';
import Card from '../../components/Card/Card';
import { MoviesProps } from 'utils/types';
import './CardList.scss';
import Popup from '../../components/Popup/Popup';

const CardList: FC<MoviesProps> = ({ movies }) => {
  const [popupActive, setPopupActive] = useState(false);
  const [movieId, setMovieId] = useState('');
  const cards = movies.map((item) => {
    return (
      <Card
        handleClick={() => {
          setPopupActive(true);
          setMovieId(item.id.toString());
        }}
        key={item.id}
        {...item}
      />
    );
  });
  return (
    <>
      <section className="cards__wrapper" data-testid="cards-wrapper">
        {cards}
      </section>
      <Popup active={popupActive} setActive={setPopupActive} movieId={movieId} />
    </>
  );
};

export default CardList;
