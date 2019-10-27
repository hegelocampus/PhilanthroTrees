import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom';
import CommunityIndex from './community_index';
import CommunityForm from './community_form';
import CommunityDetail from './community_detail';
import InviteContainer from '../user/invitation_container';

export default (props) => {
  const match = useRouteMatch();

  return (
    <React.Fragment>
      <Switch>
        <Route
          path={ `${ match.path }/citizens` }
          component={ CommunityIndex }
        />
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
          path={ `${ match.path }/` }
          component={ CommunityDetail }
        />
        <Route
          path={ `${ match.path }/invite` }
          component={ InviteContainer}
          type="put"
        />
      </Switch>
    </React.Fragment>
  );
};

