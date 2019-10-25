import React, { useEffect } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { requestCommunity } from '../../../actions/community_actions';
import CitizenIndex from './citizens_index';

export default (props) => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);
  const community = useSelector(state => state.entities.community);

  useEffect(() => {
    dispatch(requestCommunity(currentUser.communityId));
  },
    [dispatch, currentUser]
  )

  return (
    <React.Fragment>
      { currentUser.communityId ? (
        <>
          <h3> { community.name || null } </h3>
          <h3> { community.admin ? community.admin.name : null } </h3>
          <CitizenIndex />
        </>
      ):(
        <>
          <h3>You don't belong to a community yet!</h3>
          <Link to={ `${ match.path }/new` }>
            Click here to create a new community!
          </Link>
        </>
      )}
    </React.Fragment>
  );
}

