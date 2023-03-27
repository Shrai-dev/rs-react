import React, { FC } from 'react';
import { Routes, Route } from 'react-router';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import AboutUs from './pages/AboutUs/AboutUs';
import Error from './pages/Error/Error';
import Form from './components/Form/Form';

const App: FC = () => {
  return (
    <div className="app__container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="form" element={<Form />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
