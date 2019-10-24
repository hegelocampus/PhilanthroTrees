import React from 'react';
import MainNav from './main-nav';
import UserMenu from './top_bar_user_menu';

export default (props) => {
  return (
    <header className="top-bar">
      <nav>
        <div className="top-bar-nav-container">
          <MainNav />
        </div>
        <div className="top-bar-search-container">
        </div>
        <div className="top-bar-user-menu-container">
          <UserMenu />
        </div>
      </nav>
    </header>
  )
};

