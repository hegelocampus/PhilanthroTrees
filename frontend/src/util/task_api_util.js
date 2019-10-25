import axios from 'axios';

export const fetchTasks = projectId => {
  return axios.get(`/api/projects/${projectId}/tasks`);
}

export const createTask = (projectId, task) => {
  return axios.post(`/api/projects/${projectId}/tasks/create`, task)
}

export const updateTask = (taskId, task) =>{
  return axios.patch(`/api/tasks/${taskId}`, task)
}