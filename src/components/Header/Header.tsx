import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="nav__bar">
          <ul className="nav__list">
            <li className="nav__list-item">
              <Link className="nav__list-link" to="/">
                Main
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="nav__list-link" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="nav__list-link" to="/form">
                Form
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
