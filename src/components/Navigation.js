import React from 'react';
import {Link} from 'react-router-dom';
import "./styles/header.scss"

const Navigation = () => (
  <header>
    <div className="container">
      <div className="site_name">
        <span>Raman </span>
        <span>Choudhary</span>
      </div>
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li>
          <span className="new_badge">new</span>
          <Link to="/weekend-project">
            Weekend Project
          </Link>
        </li>
        <li>
          <span className="menu_button">P</span>
        </li>
      </ul>
    </div>
  </header>
);

export default Navigation;
