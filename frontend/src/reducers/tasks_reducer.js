import merge from 'lodash/merge';

import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";
import { RECEIVE_ALL_TASKS, RECEIVE_TASK } from '../actions/task_actions';

const _nullTasks = {};

const tasksReducer = (state= {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type){
    case RECEIVE_ALL_TASKS:
      newState = merge({}, state);
      Object.values(action.tasks).forEach(task =>{
        newState[task._id]= task
      });
      return newState;
    case RECEIVE_TASK:
      let task = { [action.task._id]: action.task }
      newState = merge({}, state, task);
      return newState;
    case RECEIVE_USER_LOGOUT:
      return _nullTasks;
    default:
      return state;
  }
}

export default tasksReducer;

