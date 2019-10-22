import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import UserDetail from './user/user_detail';

export default (props) => {
  return (
    <div className="main-container">
      {/* User Profile is always displayed at the top, right under the nav bar */}
      <UserDetail />
      <Switch>
        <Route path={'/profile/:userId'}>
          <h1>User show page</h1>
        </Route>
        {/* Tasks will be displayed on the root page
        <Route path="/" component={ Tasks } />
        */}
      </Switch>
    </div>
  )
}
