import axios from "axios";

export const fetchCommunity = communityId => (
  axios.get(`/api/communities/${ communityId }`)
);

export const fetchCommunityUsers = communityId => (
  axios.get(`/api/communities/${ communityId }/citizens`)
);

export const addUserToCommunity = (userId, communityId) => (
  axios.get(`/api/users/${ userId }`)
);

export const createCommunity = (userId, data) => {
  console.log(data);
  return axios.post(`/api/users/${ userId }/community/create`, data)
};

