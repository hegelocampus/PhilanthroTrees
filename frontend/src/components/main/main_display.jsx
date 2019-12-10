import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import TopBar from './top_bar/top_bar';
import UserDetail from './user/user_detail';
import ProjectContainer from '../project/project_container';
import Community from './community/community';
import TodoList from '../todo/todo_list_container';
import PendingInviteContainer from './user/pending_container';

import '../../stylesheets/main_container.scss';

export default (props) => {
  return (
    <React.Fragment>
      <TopBar />
      <div className="main-container">
        <TodoList />
        {/* User Profile is always displayed at the top, right under the nav bar */}
        <div>
          <UserDetail />
          {/* <PendingInviteContainer/> */}
          <Switch>
            <Route
             path={'/user/:userId'}/>
            <Route
              path={'/pending'}
              component={PendingInviteContainer}
              />
            <Route
              path='/community'
              component={ Community }
            />
            <Route path="/projects/:projectId"
            component={ProjectContainer} />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  )
}

