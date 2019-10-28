import {connect} from 'react-redux';
import { fetchProject, updateProject } from '../../actions/project_actions';
import { fetchTasks, createTask, updateTask } from '../../actions/task_actions';
import { updateUser } from '../../actions/user_actions';
import Project from './project';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state,ownProps) =>{
  let projectId = ownProps.match.params.projectId
  let project = state.entities.projects && state.entities.projects[projectId]

  return({
    users: state.entities.users,
    currentUser: state.session.user,
    project: project,
    tasks: state.entities.tasks,
    errors: state.errors
  })
};

const mapDispatchToProps = dispatch =>{

  return({
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
    fetchTasks: (projectId) => dispatch(fetchTasks(projectId)),
    updateProject: (project) => dispatch(updateProject(project)),
    createTask: (projectId, task) => dispatch(createTask(projectId, task)),
    updateTask: (task) => dispatch(updateTask(task)),
    updateUser: (user) => dispatch(updateUser(user))
  })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Project));

