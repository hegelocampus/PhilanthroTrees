import * as ApiUtil from '../util/community_api_util';

export const RECEIVE_COMMUNITY = 'RECEIVE_COMMUNITY';
export const RECEIVE_COMMUNITIES = 'RECEIVE_COMMUNITIES';

const receiveCommunity = community => ({
  type: RECEIVE_COMMUNITY,
  community
});

//const receiveCommunities = communities => ({
//  type: RECEIVE_COMMUNITIES,
//  communities
//});

export const requestCommunity = communityId => dispatch => ApiUtil.fetchCommunity(communityId)
  .then(
    res => dispatch(receiveCommunity(res.data))
  );

