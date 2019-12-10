import React from 'react';
import { useDispatch } from 'react-redux';

import InviteItem from './invite_item';


export default ({currentUser, requestUser, updateUser, users, addUserToCommunity}) => {
  const dispatch = useDispatch();

  let pendingInvites = users[currentUser.id] ?
    users[currentUser.id].pendingInvites : null;

  let inviteList = pendingInvites ? 
    <ul>
      {Object.values(pendingInvites).map(pending => {
          return (
            <InviteItem
              key={pending.id}
              currentUser={users[currentUser.id]}
              pending={pending}
              updateUser={updateUser}
              addUserToCommunity={addUserToCommunity}
            />
          )
      })}
    </ul> : <p>You have no pending invitations.</p>

  return(
    <React.Fragment>
      {inviteList}
    </React.Fragment>
  )

};