import axios from "axios";

export const fetchCommunity = communityId => {
  return axios.get(`/api/communities/${ communityId }`);
};

export const login = communitiesData => {
  return axios.get("/api/communitys/login", communityData);
};

