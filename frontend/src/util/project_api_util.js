import axios from "axios";

export const fetchProjects = communityId => {
  return axios.get(`/api/communities/${communityId}/projects`);
};

export const fetchProject = projectId => {
  return axios.get(`api/projects/${projectId}`);
}