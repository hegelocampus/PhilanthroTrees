import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import UserDetail from './user/user_detail';
import ProjectContainer from '../project/project_container';

export default (props) => {
  return (
    <div className="main-container">
      {/* User Profile is always displayed at the top, right under the nav bar */}
      <UserDetail />
      <Switch>
        <Route path={'/profile/:userId'}>
          <h1>User show page</h1>
        </Route>
        <Route path="/projects/:projectId" 
        component={ProjectContainer} />
        {/* Tasks will be displayed on the root page
        <Route path="/" component={ Tasks } />
        */}
      </Switch>
    </div>
  )
}
