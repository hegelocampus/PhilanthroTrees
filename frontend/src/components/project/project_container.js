import {connect} from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import { fetchTasks } from '../../actions/task_actions';

const mapStateToProps = (state,ownProps) =>{
  let projectId = ownProps.match.params.projectId
  let project = state.entities.projects && state.entities.projects[projectId]

  return({
    project: project,
    tasks: state.entities.tasks,
    errors: state.errors
  })
};

const mapDispatchToProps = dispatch =>{

  return({
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
    fetchTasks: (projectId) => dispatch(fetchProject(projectId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);