import { RECEIVE_PROJECT_ERRORS } from '../actions/project_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_PROJECT_ERRORS:
      return action.errors;
      // return { msg:'Uh oh. Please contact the app administrator'};
    default:
      return state;
  }
}

