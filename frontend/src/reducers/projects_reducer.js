import merge from 'lodash/merge';

import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";
import {
  RECEIVE_PROJECT,
  RECEIVE_ALL_PROJECTS,
  REMOVE_PROJECT,
} from '../actions/project_actions';

const _nullProjects = {};

const projectsReducer = (state = {}, action) =>{
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_ALL_PROJECTS:
      newState = merge({}, state);
      Object.values(action.projects).forEach(project=>{
        newState[project._id] = project
      });
      return newState;
      // return action.projects;
    case RECEIVE_PROJECT:
      let project = {[action.project._id]: action.project}
      newState = merge({}, state, project);
      return newState;
    case REMOVE_PROJECT:
      newState = merge({}, state);
      delete newState[action.projectId];
      return newState;
    case RECEIVE_USER_LOGOUT:
      return _nullProjects;
    default:
      return state;
  }
}

export default projectsReducer;
