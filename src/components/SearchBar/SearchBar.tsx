import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import './SearchBar.scss';

const SearchBar: FC = () => {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('searchQuery') || '');

  useEffect(() => {
    if (localStorage.getItem('formData') !== null) {
      setSearchQuery(searchQuery);
    }
  }, [searchQuery]);

  const handleFormSubmit = (e: { preventDefault: () => void }): void => {
    e.preventDefault();
    setLocalStorage();
  };

  const setLocalStorage = (): void => {
    localStorage.setItem('searchQuery', searchQuery);
  };

  return (
    <div className="search__container" data-testid="search-container">
      <form onSubmit={handleFormSubmit}>
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
