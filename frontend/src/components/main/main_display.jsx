import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import TopBar from './top_bar/top_bar';
import UserDetail from './user/user_detail';
import ProjectContainer from '../project/project_container';
import Community from './community/community';
import TodoListContainer from '../todo/todo_list_container';
import Invite from '../main/user/user_invitation';

export default (props) => {
  return (
    <React.Fragment>
      <TopBar />
      <div className="main-container">
        {/* User Profile is always displayed at the top, right under the nav bar */}
        <UserDetail />
        <Switch>
          <Route path={'/profile/:userId'}>
            <h1>User show page</h1>
          </Route>
          <Route
            path='/community'
            component={ Community }
          />
          <Route path="/projects/:projectId"
          component={ProjectContainer} />
          <Route path="/" component={ TodoListContainer } />
          <Route path="/invite" component={Invite} />
        </Switch>
      </div>
    </React.Fragment>
  )
}

