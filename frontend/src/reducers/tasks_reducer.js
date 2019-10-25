import merge from 'lodash/merge';

import { RECEIVE_ALL_TASKS, RECEIVE_TASK, RECEIVE_TASK_ERRORS } from '../actions/task_actions';

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

    // case RECEIVE_TASK_ERRORS:
    //   return {};

    default:
      return state;
  }
}

export default tasksReducer;