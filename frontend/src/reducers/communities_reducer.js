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
      return merge({}, action.community)
    default:
      return state;
  }
};
