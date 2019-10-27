import merge from 'lodash/merge';

import {
  RECEIVE_USER,
  RECEIVE_USERS,
} from '../actions/user_actions.js';

import {
  RECEIVE_COMMUNITY,
  RECEIVE_COMMUNITY_ASSOC
} from '../actions/community_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMUNITY_ASSOC :
    case RECEIVE_USER:
      let { user } = action;
      return merge({}, state, {
        [user.id]: user
      });
    case RECEIVE_COMMUNITY:
      let { community } = action;
      let users = {};
      Object.values(community.citizens).forEach(cit => {
        users[cit.id] = cit;
      });
      return merge({}, users, state)
    case RECEIVE_USERS:
      return merge({}, action.users);

    default:
      return state;
  }
};

