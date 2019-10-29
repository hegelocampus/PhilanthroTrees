import React from 'react';
import {
  useSelector
} from 'react-redux';
import {
  Link,
  useRouteMatch
} from 'react-router-dom';
import '../../../stylesheets/community_details.scss';

export default (props) => {
  const match = useRouteMatch();
  const citizens = useSelector(state => {
    if (state.entities.users) {
      return  Object.values(state.entities.users);
    }
  });

  let citizensLis;
  if (citizens.length) {
    citizensLis = citizens.map((user) => {
      let { id, username } = user;
      return (
      <li key={ id }>
        <Link className="citizen" to={ `${ match.path }/${ id }` }>
          <span>{ username }</span>
        </Link>
      </li>
    )});
  }
  return (
    <React.Fragment>
      <h5 className='citizens-header' >Citizens:</h5>
      <ul className='citizen-list'>
        { citizensLis }
      </ul>
    </React.Fragment>
  );
}
