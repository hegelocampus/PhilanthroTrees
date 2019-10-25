import * as ApiUtil from '../util/community_api_util';

export const RECEIVE_COMMUNITY = 'RECEIVE_COMMUNITY';
export const RECEIVE_COMMUNITY_ASSOC = 'RECEIVE_COMMUNITY_ASSOC';
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

export const requestCommunity = (comId) => dispatch => ApiUtil.fetchCommunity(comId)
  .then(
    res => dispatch(receiveCommunity(res.data)),
    errors => dispatch(receiveCommunityErrors(errors))
  );

export const createUserCommunity = (userId, values) => dispatch => ApiUtil.createCommunity(userId, values)
  .then(
    res => {
      console.log(res.data);
      dispatch(receiveCommunityAssoc(res.data));
    },
    errors => dispatch(receiveCommunityErrors(errors))
  );

export const addUserToCommunity = (userId, communityId) => dispatch => ApiUtil.addUserToCommunity(userId, communityId)
  .then(
    res => dispatch(receiveCommunityAssoc(res.data)),
    errors => dispatch(receiveCommunityErrors(errors))
  );

