import * as ProjectApiUtil from '../util/project_api_util';

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';

export const fetchProjects = communityId => dispatch =>(
  ProjectApiUtil.fetchProjects(communityId)
  .then(
    projects => dispatch(receiveProjects(projects)),
    errors => dispatch(receiveErrors(errors.data))
  )
)

export const receiveProjects = projects => {
  return({
    type: RECEIVE_ALL_PROJECTS,
    projects 
  })
}

export const fetchProject = project => dispatch => (
  ProjectApiUtil.fetchProject(project)
  .then(
    project => dispatch(receiveProject(project.data)),
    errors => dispatch(receiveErrors(errors.data))
));

export const updateProject = projectId => dispatch => (
  ProjectApiUtil.updateProject(projectId)
  .then(
    project => dispatch(receiveProject(project.data)),
    errors => dispatch(receiveErrors(errors.data))
));

export const receiveProject = project => {
  return({
    type: RECEIVE_PROJECT,
    project
  })
};

export const receiveErrors = errors => {
  return({
    type: RECEIVE_PROJECT_ERRORS,
    errors
  })
};