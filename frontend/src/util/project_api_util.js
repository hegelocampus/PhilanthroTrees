import axios from "axios";

export const fetchProjects = communityId => {
  return axios.get(`/api/communities/${communityId}/projects`);
};