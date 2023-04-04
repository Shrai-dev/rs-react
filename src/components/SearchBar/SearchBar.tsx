import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import './SearchBar.scss';

const SearchBar: FC = () => {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('searchQuery') || '');
  const searchValueRef = useRef('');

  useEffect(() => {
    searchValueRef.current = searchQuery;
  }, [searchQuery]);

  useEffect(() => {
    return () => {
      setLocalStorage(searchValueRef.current);
    };
  }, []);

  const setLocalStorage = (value: string): void => {
    localStorage.setItem('searchQuery', value);
  };

  return (
    <div className="search__container" data-testid="search-container">
      <form>
        <input
          className="search__input"
          type="search"
          name="searchValue"
          aria-label="search"
          value={searchQuery}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
        />
        <button className="search__btn" type="submit" data-testid="search-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
