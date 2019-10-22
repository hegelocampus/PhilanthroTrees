import {
  RECEIVE_USER,
  RECEIVE_USERS
} from '../actions/user_actions.js';

import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      let {user} = action;
      return merge({}, state, {
        [user.id]: user
      });
    case RECEIVE_USERS:
      return merge({}, action.users)
    default:
      return state;
  }
};

