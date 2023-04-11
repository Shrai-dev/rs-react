import React, { FC } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Main.scss';

const Main: FC = () => {
  return (
    <main className="main">
      <SearchBar />
    </main>
  );
};

export default Main;
