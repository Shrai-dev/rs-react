import React, { FC, useEffect, useState } from 'react';
import { Genre, MovieData } from '../../utils/types';
import getMovieGenre from '../../utils/getMovieGenre';
import './Card.scss';
import PosterNotFound from '../../assets/no-poster-found.png';
import RatingIcon from '../../assets/rating-icon.svg';
import { getAllGenres } from '../../api/api';

const Card: FC<MovieData> = (props) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  const getGenres = async () => {
    const fetchedGenres = await getAllGenres();
    setGenres(fetchedGenres.genres);
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <div
      className="movie__item"
      data-testid="card-container"
      id={props.id.toString()}
      onClick={() => props.handleClick?.()}
    >
      <div className="movie__rating">
        <img className="movie__rating-icon" src={RatingIcon} alt="rating" />
        <span className="movie__rating-text">{props.vote_average.toFixed(1)}</span>
      </div>
      <div className="movie__item-img">
        <img
          className="movie__img"
          src={
            props.poster_path
              ? `https://image.tmdb.org/t/p/w1280${props.poster_path}`
              : PosterNotFound
          }
          alt={props.title}
        />
      </div>
      <div className="movie__info">
        <h3 className="movie__title">{props.title}</h3>
        <p className="movie__details">
          {props.release_date.slice(0, 4)} | {getMovieGenre(props.genre_ids, genres)}
        </p>
      </div>
    </div>
  );
};

export default Card;
