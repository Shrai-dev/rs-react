import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="nav__bar">
          <ul className="nav__list">
            <li>
              <Link className="backward__link" to="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link className="backward__link" to="/main">
                Main
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
