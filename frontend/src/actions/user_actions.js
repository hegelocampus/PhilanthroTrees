import * as ApiUtil from '../util/user_api_util';
import { fetchCommunityUsers } from '../util/community_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
})

export const requestUser = userId => dispatch => ApiUtil.fetchUser(userId).then(
  res => dispatch(receiveUser(res.data))
);

export const requestCommunityUsers = (comId) => dispatch => fetchCommunityUsers(comId)
  .then(
    res => dispatch(receiveUsers(res.data)),
    errors => dispatch(receiveErrors(errors))
  );


