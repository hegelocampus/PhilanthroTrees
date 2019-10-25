import merge from 'lodash/merge';

import {
  RECEIVE_COMMUNITY,
  RECEIVE_COMMUNITY_ASSOC
} from '../actions/community_actions';


export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMUNITY:
    case RECEIVE_COMMUNITY_ASSOC:
      let { community } = action;
      let citizens = [];
      Object.values(community.citizens).forEach(cit => {
        citizens.push(cit.id);
      });
      return merge({}, state, {
        id: community.id,
        name: community.name,
        admin: community.admin,
        citizens: citizens
      })
    default:
      return state;
  }
};
