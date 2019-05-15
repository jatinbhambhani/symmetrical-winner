import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">Jatin<span>Cinemas</span></li>
          </ul>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Book Show</a></li>
              <li><a href="#">Trailers</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
