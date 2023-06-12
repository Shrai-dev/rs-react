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

export const getAllGenres = async () => {
  const urlGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=1522de262832f8a37e8d96e7ed928ba5&language=en-US`;
  try {
    const resGenres = await fetch(urlGenres);
    const dataGenres = await resGenres.json();
    return dataGenres;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieById = async (movieId: string) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
