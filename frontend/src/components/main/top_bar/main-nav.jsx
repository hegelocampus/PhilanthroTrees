import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/">
            Tasks
          </Link>
        </li>
        <li>
          <Link to="/community">
            Community
          </Link>
        </li>
      </ul>
    </nav>
  )
}

