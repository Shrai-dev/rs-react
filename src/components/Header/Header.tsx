import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
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
