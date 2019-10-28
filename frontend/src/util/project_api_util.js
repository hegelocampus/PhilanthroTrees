import axios from "axios";

export const fetchProjects = communityId => {
  return axios.get(`/api/communities/${communityId}/projects`);
};

export const fetchProject = projectId => {
  debugger
  return axios.get(`api/projects/${projectId}`);
}

export const updateProject = project => {
  return axios.patch(`api/projects/${project._id}`, project);
}

export const deleteProject = project => {
  return axios.delete(`api/projects/${project._id}`, project);
}

