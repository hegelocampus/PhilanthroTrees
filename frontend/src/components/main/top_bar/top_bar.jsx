import React from 'react';
import MainNav from './main-nav';
import UserMenu from './top_bar_user_menu';
// <PendingInviteContainer/> from user/pending_container
export default (props) => {
  return (
    <header className="top-bar">
      <nav>
        <div className="top-bar-nav-container top-bar-el-container">
          <MainNav />
        </div>
        <div className="top-bar-search-container top-bar-el-container">
        </div>
        <div className="top-bar-user-menu-container top-bar-el-container">
          <div className="user-menu-notification-container">
            Inbox
          </div>
          <UserMenu />
        </div>
      </nav>
    </header>
  )
};

