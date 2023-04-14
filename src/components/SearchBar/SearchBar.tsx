import React, { FC } from 'react';
import { MovieData } from '../../utils/types';
import './SearchBar.scss';

interface SearchBarProps {
  handleInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchMovies: (searchString: string) => Promise<MovieData[] | void>;
  searchQuery: string;
}

const SearchBar: FC<SearchBarProps> = ({ handleInputValue, searchMovies, searchQuery }) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      searchMovies(searchQuery);
    }
  };

  return (
    <>
      <div className="search__container" data-testid="search-container">
        <input
          className="search__input"
          type="search"
          name="searchValue"
          aria-label="search"
          onChange={handleInputValue}
          onKeyDown={handleKeyPress}
          placeholder="Enter movie..."
          autoComplete="off"
        />
        <button
          className="search__btn"
          type="submit"
          data-testid="search-btn"
          onClick={() => searchMovies(searchQuery)}
        ></button>
      </div>
    </>
  );
};

export default SearchBar;
