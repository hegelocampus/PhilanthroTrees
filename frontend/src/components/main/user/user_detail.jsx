import React, { useEffect, } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { requestUser } from '../../../actions/user_actions';
//import ProgressBar from './progress_bar';
import { Line } from 'rc-progress';

import '../../../stylesheets/user.scss';


export default (props) => {
  const dispatch = useDispatch();

  const currentUserId = useSelector(state => state.session.user.id);
  const currentUser = useSelector(state => state.entities.users[currentUserId]);

  useEffect(() => {
    dispatch(requestUser(currentUserId));
  },
  //May have to include something else here to make it so user updates after task
  //completeion, perhaps a subscription
  [currentUserId, dispatch]
  );

  return (
    <React.Fragment>
      { currentUser && currentUser.hp ? (
        <div className="user-detail-container">
          <ul className="user-stats-ul">
            <li className="user-stats-li user-detail-username-li">
              <s>Username:</s>
              <h3>{ currentUser.username }</h3>
            </li>
            <li>
              {/* lowest user level is 1, user level is determined by exp */}
              <s>Level: </s>
              <h4>{ Math.floor((currentUser.experience + 50) / 50) }</h4>
            </li>
            <li className="user-stats-li">
              <Line
                percent={ currentUser.hp }
                strokeColor='#a04946'
                className="health-bar"
              />
              <span>{ `${ currentUser.hp } / 100` }</span>
            </li>
            <li className="user-stats-li">
              <Line
                percent={ ((currentUser.experience + 50) % 50) * 2 }
                strokeColor='#4946a0'
                className="experience-bar"
              />
              <span>{ `${ currentUser.experience } / 50` }</span>
            </li>
          </ul>
        </div>
      ) : (
        null
      )}
    </React.Fragment>
  );
}
