import { connect } from 'react-redux';
import {fetchProjects} from '../../actions/project_actions';
import TodoList from './todo_list';

const mapStateToProps = state => ({
    users: state.entities.users,
    currentUser: state.session.user,
    projects: state.entities.projects
})

const mapDispatchToProps = dispatch => ({
  fetchProjects: communityId => dispatch(fetchProjects(communityId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
