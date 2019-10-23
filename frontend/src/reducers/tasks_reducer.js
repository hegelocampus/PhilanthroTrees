import merge from 'lodash/merge';

import { RECEIVE_ALL_TASKS } from '../actions/task_actions';

const taskReducer = (state= {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type){

    case RECEIVE_ALL_TASKS:
      newState = merge({}, state);
      Object.values(action.tasks).forEach(task =>{
        newState[task.id]= task
      });
      return newState;

    default:
      return state;
  }
}

export default taskReducer;