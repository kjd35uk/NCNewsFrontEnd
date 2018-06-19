import React from 'react';
import { Link } from "react-router-dom";


const Nav = () => {
  return(
    <nav className="nav">
    <div className="home-button-container">
      <Link to="/">
        <button className="nav" id="home-button">
          Home
        </button>
      </Link>
    </div>
    <div className="topic-button-container">
      <Link to="/topics/cooking">
        <button className="nav" id="nav-button">
          Cooking
        </button>
      </Link>
      <Link to="/topics/football">
        <button className="nav" id="nav-button">
          Football
        </button>
      </Link>
      <Link to="/topics/coding">
        <button className="nav" id="nav-button">
          Coding
        </button>
      </Link>
    </div>
  </nav>
  )
}
export default Nav;