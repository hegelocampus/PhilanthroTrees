import React, { useEffect, } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { requestUser } from '../../../actions/user_actions';
import ProgressBar from './progress_bar';

export default (props) => {
  const dispatch = useDispatch();

  const currentUserId = useSelector(state => state.session.user.id);
  const currentUser = useSelector(state => state.entities.users[currentUserId]);
  console.log(currentUserId);

  useEffect(() => {
    dispatch(requestUser(currentUserId));
  },
  //May have to include something else here to make it so user updates after task
  //completeion, perhaps a subscription
  [currentUserId, dispatch]
  );

  console.log(currentUser);

  return (
    <React.Fragment>
      { currentUser && currentUser.username ? (
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
              <ProgressBar percentage={ currentUser.hp } type='hp' />
            </li>
            <li className="user-stats-li">
              <ProgressBar percentage={ currentUser.exp % 100 } type='exp' />
            </li>
          </ul>
        </div>
      ) : (
        null
      )}
    </React.Fragment>
  );
}
