import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div className="top-menu-user-menu-wrapper">
      <Link className="top-menu-item" to="/community">
        Community
      </Link>
    </div>
  )
}

