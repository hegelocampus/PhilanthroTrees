import { RECEIVE_PROJECT, RECEIVE_PROJECT_ERRORS } from '../actions/project_actions';

const _nullErrors = [];

export default (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_PROJECT_ERRORS:
      return action.errors;
      // return { msg:'Uh oh. Please contact the app administrator'};
    case RECEIVE_PROJECT:
      return _nullErrors;
    default:
      return state;
  }
}

