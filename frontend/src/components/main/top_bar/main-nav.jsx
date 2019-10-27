import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/">
            Projects To Do
          </Link>
        </li>
        <li>
          <Link to="/community">
            Community
          </Link>
        </li>
        <li>
          <Link to="/community/invite">
            Invite
          </Link>
        </li>

      </ul>
    </nav>
  )
}

