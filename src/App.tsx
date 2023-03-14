import React, { Component } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import AboutUs from './pages/AboutUs/AboutUs';
import Error from './pages/Error/Error';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="main" element={<Main />} />
          </Route>
          <Route path="about-us" element={<AboutUs />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    );
  }
}

export default App;
