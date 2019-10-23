import axios from 'axios';

export const fetchTasks = projectId => {
  return axios.get(`/api/projects/${projectId}/tasks`);
}