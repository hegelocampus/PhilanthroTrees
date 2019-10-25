import { RECEIVE_TASK_ERRORS } from '../actions/task_actions';

const taskErrorsReducer = (state ={}, action) =>{
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_TASK_ERRORS:
      return action.errors
    default:
      return state;
  }
}

export default taskErrorsReducer;
