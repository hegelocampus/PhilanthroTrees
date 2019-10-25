import React, { useEffect } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  Link,
  useRouteMatch
} from 'react-router-dom';

export default (props) => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const community = useSelector(state => state.entities.community);
  const citizens = useSelector(state => {
    if (state.entities.users) {
      return  Object.values(state.entities.users);
    }
  });

  let citizensLis;
  if (citizens) {
    citizensLis = citizens.map(({ id, username }) => (
      <li key={ id }>
        <Link to={ `${ match.path }/${ id }` }>
          <span>{ username }</span>
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
