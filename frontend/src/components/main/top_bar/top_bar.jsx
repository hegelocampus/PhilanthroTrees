import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  useSelector,
} from 'react-redux';
import MainNav from './main-nav';
import UserMenu from './top_bar_user_menu';

export default (props) => {
  let inbox;
  const currentUser = useSelector(state => state.entities.users[state.session.user.id]);
  let inviteLink;
 

  if (currentUser) {
   inbox = currentUser.pendingInvites.length ? "Pending Invites" : "No New Mail"
    inviteLink = currentUser.pendingInvites.length ? <Link to={`/pending`} className="user-menu-invites">{inbox}</Link> : <a href="" className="user-menu-invites" >{inbox}</a>
  }
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
            {inviteLink}
          </div>
          <UserMenu />
        </div>
      </nav>
    </header>
  )
};

