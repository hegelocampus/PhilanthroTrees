import * as ApiUtil from '../util/community_api_util';

export const RECEIVE_COMMUNITY = 'RECEIVE_COMMUNITY';
export const RECEIVE_COMMUNITY_ASSOC = 'RECEIVE_COMMUNITY';
//export const RECEIVE_COMMUNITIES = 'RECEIVE_COMMUNITIES';
export const RECEIVE_COMMUNITY_ERRORS = 'RECEIVE_COMMUNITY_ERRORS';

const receiveCommunity = community => ({
  type: RECEIVE_COMMUNITY,
  community
});

const receiveCommunityAssoc = ({ community, user }) => ({
  type: RECEIVE_COMMUNITY_ASSOC,
  user,
  community
});

export const receiveCommunityErrors = (errors) => ({
  type: RECEIVE_COMMUNITY_ERRORS,
  errors
});

export const requestUserCommunity = (userId) => dispatch => ApiUtil.fetchCommunity(userId)
  .then(
    res => dispatch(receiveCommunity(res.data)),
    errors => dispatch(receiveCommunityErrors(errors))
  );

export const createUserCommunity = (userId) => dispatch => ApiUtil.createCommunity(userId)
  .then(
    res => dispatch(receiveCommunity(res.data)),
    errors => dispatch(receiveCommunityErrors(errors))
  );

export const addUserToCommunity = (userId, communityId) => dispatch => ApiUtil.addUserToCommunity(userId, communityId)
  .then(
    res => dispatch(receiveCommunityAssoc(res.data)),
    errors => dispatch(receiveCommunityErrors(errors))
  );

