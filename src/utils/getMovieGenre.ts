import { Genre } from './types';

const getMovieGenre = (movieGenresArray: number[], allGenresArray: Genre[]): string => {
  const movieGenre = [];
  for (let i = 0; i < allGenresArray.length; i++) {
    for (let j = 0; j < movieGenresArray.length; j++) {
      if (movieGenresArray[j] === allGenresArray[i]['id']) {
        movieGenre.push(allGenresArray[i]['name']);
      }
    }
  }
  return movieGenre.join(', ');
};

export default getMovieGenre;
