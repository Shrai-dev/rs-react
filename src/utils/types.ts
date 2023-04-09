export type FormState = {
  errors: { [key: string]: string };
  isFormDataValid: boolean;
};

export interface FormData {
  firstName: string;
  lastName: string;
  birthday: string;
  country: string;
  promo: boolean;
  gender: string;
  file: FileList;
}

export interface FormCardData {
  firstName: string;
  lastName: string;
  birthday: string;
  country: string;
  promo: boolean;
  gender: string;
  file: string;
}

export interface ValidationErrors {
  [x: string]: string;
}

export interface MovieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviesProps {
  movies: MovieData[];
}
