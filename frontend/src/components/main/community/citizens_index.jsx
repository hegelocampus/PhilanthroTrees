import React, { useEffect } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  Link,
  useRouteMatch
} from 'react-router-dom';
import { requestCommunityUsers } from '../../../actions/user_actions';

export default (props) => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const community = useSelector(state => state.entities.community);
  const citizens = useSelector(state => state.entities.users);

  useEffect(() => {
    if (community.id) {
      dispatch(requestCommunityUsers(community.id))
    }
  },
    [dispatch, community.id]
  )

  let citizensLis;
  if (citizens.length) {
    citizensLis = citizens.map(user => (
      <li key={ user.id }>
        <Link to={ `${match}/${user.id}` }>
          <span>{ user.name }</span>
        </Link>
      </li>
    ));
  }
  return (
    <React.Fragment>
      <h5>Citizens:</h5>
      <ul>
        { citizensLis }
      </ul>
    </React.Fragment>
  );
}
