import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Main.scss';
import { MovieData } from '../../utils/types';
import CardList from '../../components/CardList/CardList';
import Loader from '../../components/Loader/Loader';
import { searchMovies, showPopularMovies } from '../../api/api';

const Main: FC = () => {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('searchQuery') || '');
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const inputValue = e.target.value;
    localStorage.setItem('searchQuery', e.target.value);
    setSearchQuery(inputValue);
  };

  const renderMovies = async () => {
    setIsMoviesLoading(true);
    if (!localStorage.getItem('searchQuery') || searchQuery === '') {
      const popularMovies = await showPopularMovies();
      setMovies(popularMovies);
      setIsMoviesLoading(false);
    } else if (localStorage.getItem('searchQuery')) {
      setMovies(await searchMovies(localStorage.getItem('searchQuery')!));
      setIsMoviesLoading(false);
    } else {
      const fetchedMovies = await searchMovies(searchQuery);
      setMovies(fetchedMovies);
      setIsMoviesLoading(false);
    }
  };

  useEffect(() => {
    renderMovies();
  }, []);

  return (
    <main className="main">
      <SearchBar
        handleInputValue={handleInputValue}
        searchMovies={renderMovies}
        searchQuery={searchQuery}
      />
      {isMoviesLoading ? <Loader /> : <CardList movies={movies} />}
    </main>
  );
};

export default Main;
