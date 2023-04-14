import { MovieData } from 'utils/types';
import { API_KEY } from '../utils/constants';

export const searchMovies = async (searchString: string): Promise<MovieData[]> => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchString}&page=1&include_adult=false`;

  const res = await fetch(url);
  const data = await res.json();
  return data.results;
};

export const showPopularMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  const res = await fetch(url);
  const data = await res.json();
  return data.results;
};
