import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <div className="nav_wrapper">
      <div className="navbar">
        <div className="navbar_logo"><Link to="/">Stagetime</Link></div>
        <div className="navbar_write"><Link to="/write">Write a post</Link></div>
      </div>
    </div>
  );
}

export default NavBar;