import merge from 'lodash/merge';

import { RECEIVE_PROJECT } from '../actions/project_actions';


const projectsReducer = (state ={}, action) =>{
  Object.freeze(state);
  let newState;

  switch(action.type){
    
    case RECEIVE_PROJECT:
      let project = {[action.project.id]: action.project}
      newState = merge({}, state, project);
      return newState;

    default:
      return state;
  }
}

export default projectsReducer;