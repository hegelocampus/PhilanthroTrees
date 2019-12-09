import React, { useEffect } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { requestCommunity } from '../../../actions/community_actions';
import CitizenIndex from './citizens_index';
import InvitationContainer from '../user/invitation_container';
import '../../../stylesheets/community_details.scss';


export default (props) => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.session.user.id);
  const comId = useSelector(state => {
    return state.entities.users[currentUserId] ? state.entities.users[currentUserId].communityId : null
  });
  const community = useSelector(state => state.entities.community);

  useEffect(() => {
    if (comId) {
      dispatch(requestCommunity(comId));
    }
  },
    [comId, dispatch]
  )

  return (
    <React.Fragment>
      { comId ? (
        <>
          <h3 className="community-name" > { community.name || null } </h3>
          <h3 className="community-admin"> { community.admin ? community.admin.name : null } </h3>
          <CitizenIndex />
          <InvitationContainer/>
        </>
      ):(
        <>
          <h3>You don't belong to a community yet!</h3>
          <Link to='/community/new'>
            Click here to create a new community!
          </Link>
        </>
      )}
    </React.Fragment>
  );
}

