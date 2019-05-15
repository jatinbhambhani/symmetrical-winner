import React, { Component } from 'react';
import Nav from "./nav";

class Header extends Component {
  render() {
    return (
     
      <header>
      <Nav/>
        <div className="head">
            <h1>Book< br/>  Now,< br/> Experience More</h1>
            <div>
              <p>Book now for an amazing experience of your favourite films and documentaries.</p>
              <div><a className="contact" href="#">Contact Us</a></div>
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default Header;
