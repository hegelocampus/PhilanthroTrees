import React, { useEffect, } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { requestUser } from '../../../actions/user_actions';

export default (props) => {
  const dispatch = useDispatch();

  const currentUserId = useSelector(state => state.session.user.id);
  const currentUser = useSelector(state => state.entities.users[currentUserId]);

  useEffect(() => {
    dispatch(updateInvite(userEmail));
  },
    //May have to include something else here to make it so user updates after task
    //completeion, perhaps a subscription
    [currentUserId, dispatch]
  );

  return(

  )

}