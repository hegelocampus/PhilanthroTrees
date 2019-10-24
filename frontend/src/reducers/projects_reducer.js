import merge from 'lodash/merge';

import { RECEIVE_PROJECT, RECEIVE_ALL_PROJECTS, REMOVE_PROJECT } from '../actions/project_actions';


const projectsReducer = (state ={}, action) =>{
  Object.freeze(state);
  let newState;

  switch(action.type){

    case RECEIVE_ALL_PROJECTS:
      newState = merge({}, state);
      Object.values(action.projects).forEach(project=>{
        newState[project._id] = project
      });
      return newState;
    
    case RECEIVE_PROJECT:
      let project = {[action.project._id]: action.project}
      newState = merge({}, state, project);
      return newState;

    case REMOVE_PROJECT:
      newState = merge({}, state);
      delete newState[action.projectId];
      return newState;

    default:
      return state;
  }
}

export default projectsReducer;