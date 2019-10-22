import React, { useEffect, } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { requestUser } from '../../../actions/user_actions';
import ProgressBar from './progress_bar';

export default (props) => {
  const dispatch = useDispatch();

  const currentUserId = useSelector(state => state.session.id);
  const currentUser = useSelector(state => state.entities.users[currentUserId]);

  useEffect(() => {
    dispatch(requestUser(currentUserId));
  },
  //May have to include something else here to make it so user updates after task
  //completeion
  [currentUserId, dispatch]
  );

  return (
    <div className="user-detail-container">
      <ul className="user-stats-ul">
        <li className="user-stats-li user-detail-username-li">
          <h3>{ currentUser.username }</h3>
          <div>
            {/* lowest user level is 1, user level is determined by exp */}
            <span>Level { Math.floor((currentUser.exp + 100) / 100) }</span>
          </div>
        </li>
        <li className="user-stats-li">
          <ProgressBar percentage={ currentUser.health % 100 } type='health' />
        </li>
        <li className="user-stats-li">
          <ProgressBar percentage={ currentUser.exp % 100 } type='exp' />
        </li>
      </ul>
    </div>
  );
}
