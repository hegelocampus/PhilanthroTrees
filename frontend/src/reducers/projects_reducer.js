import merge from 'lodash/merge';

import { RECEIVE_PROJECT, RECEIVE_ALL_PROJECTS } from '../actions/project_actions';


const projectsReducer = (state ={}, action) =>{
  Object.freeze(state);
  let newState;

  switch(action.type){

    case RECEIVE_ALL_PROJECTS:
      newState = merge({}, state);
      Object.values(action.projects).forEach(project=>{
        newState[projects._id] = project
      });
      return newState;
    
    case RECEIVE_PROJECT:
      let project = {[action.project._id]: action.project}
      newState = merge({}, state, project);
      return newState;

    default:
      return state;
  }
}

export default projectsReducer;