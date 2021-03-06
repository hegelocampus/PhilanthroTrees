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
  if (citizens) {
    citizensLis = citizens.map(({ id, username }) => (
      <li key={ id }>
      
          <span>{ username }</span>
     
      </li>
    ));
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
