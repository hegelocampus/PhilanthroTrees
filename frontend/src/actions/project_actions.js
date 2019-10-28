import * as ProjectApiUtil from '../util/project_api_util';

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

export const deleteProject = project => dispatch =>(
  ProjectApiUtil.deleteProject(project)
  .then(
    project => dispatch(removeProject(project.data)),
    errors => dispatch(receiveErrors(errors.response.data))
  )
)

export const removeProject = project => ({
  type: REMOVE_PROJECT,
  projectId: project._id
});

const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

const receiveProjects = projects => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

const receiveErrors = (errors) => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});

export const fetchProject = project => dispatch => (
  ProjectApiUtil.fetchProject(project)
  .then(
    project => dispatch(receiveProject(project.data)),
    errors => dispatch(receiveErrors(errors.response.data))
));

export const fetchProjects = communityId => dispatch =>(
  ProjectApiUtil.fetchProjects(communityId)
  .then(
    projects => dispatch(receiveProjects(projects.data)),
    errors => dispatch(receiveErrors(errors.response.data))
  )
)

export const updateProject = projectId => dispatch => (
  ProjectApiUtil.updateProject(projectId)
  .then(
    project => dispatch(receiveProject(project.data)),
    errors => dispatch(receiveErrors(errors.response.data))
));


