import axios from "axios";

export const fetchCommunity = communityId => {
  return axios.get(`/api/communities/${ communityId }`);
};

export const addUserToCommunity = (userId, communityId) => {
  return axios.get(`/api/users/${ userId }`);
};

export const createCommunity = userId => {
  return axios.get(`/api/users/${ userId }/create-community`)
};

