import axios from "axios";

export const fetchProjects = communityId => axios
  .get(`/api/communities/${communityId}/projects`);

export const fetchProject = projectId => axios
  .get(`/api/projects/${projectId}`);

export const updateProject = project => axios
  .patch(`/api/projects/${project._id}`, project);

export const deleteProject = project => axios
  .delete(`/api/projects/${project._id}`, project);

