import * as ProjectApiUtil from '../util/project_api_util';

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const fetchProject = projectId => dispatch => (
  ProjectApiUtil.fetchProject(projectId)
  .then(
    project => dispatch(receiveProject(project)),
    errors => dispatch(receiveErrors(errors))
))

export const receiveProject = project => {
  return({
    type: RECEIVE_PROJECT,
    project
  })
};

export const receiveErrors = errors => {
  return({
    type: RECEIVE_ERRORS,
    errors
  })
};