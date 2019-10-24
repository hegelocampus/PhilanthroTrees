import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom';
import CommunityIndex from './community_index';
import CommunityForm from './community_form';
import CommunityDetail from './community_detail';

export default (props) => {
  const match = useRouteMatch();

  return (
    <React.Fragment>
      <Switch>
        {/* index of community citizens */}
        <Route
          path={ `${ match.path }/citizens` }
          component={ CommunityIndex }
        />
        {/* community create page */}
        <Route
          path={ `${ match.path }/new` }
          component={ CommunityForm }
          type="post"
        />
        <Route
          path={ `${ match.path }/update` }
          component={ CommunityForm }
          type="patch"
        />
        <Route
          path="/"
          component={ CommunityDetail }
        />
      </Switch>
    </React.Fragment>
  );
};

