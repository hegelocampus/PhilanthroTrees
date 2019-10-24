import * as TaskApiUtil from '../util/task_api_util';

export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK'; 
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';

export const fetchTasks = projectId => dispatch => (
  TaskApiUtil.fetchTasks(projectId)
  .then(
    tasks => dispatch(receiveTasks(tasks.data)),
    errors => dispatch(receiveErrors(errors.data))
  )
);

export const createTask = (projectId, task) => dispatch => (
  TaskApiUtil.createTask(projectId, task)
  .then(
    task => dispatch(receiveTask(task.data)),
    errors => dispatch(receiveErrors(errors.data))
  )
)

export const receiveTask = task => {
  return({
    type: RECEIVE_TASK,
    task
  })
}

export const receiveTasks = tasks =>{
  return({
    type: RECEIVE_ALL_TASKS,
    tasks
  })
};

export const receiveErrors = errors =>{
  return({
    type: RECEIVE_TASK_ERRORS,
    errors
  })
}