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
        {/* User Profile is always displayed at the top, right under the nav bar */}
        <UserDetail />
        <TodoList />
        <PendingInviteContainer/>
        <Switch>
          <Route path={'/user/:userId'}>
            <h1>User show page</h1>
          </Route>
          <Route
            path='/community'
            component={ Community }
          />
          <Route path="/projects/:projectId"
          component={ProjectContainer} />
        </Switch>
      </div>
    </React.Fragment>
  )
}

