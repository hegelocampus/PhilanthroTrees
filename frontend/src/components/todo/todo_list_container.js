import { connect } from 'react-redux';
import {fetchProjects} from '../../actions/project_actions';
import TodoList from './todo_list';

const mapStateToProps = state =>{
  let currentUser = state.session.user;
  let users = state.entities.users 

  return({
    users: users,
    currentUser: currentUser,
    projects: state.entities.projects
  })
};

const mapDispatchToProps = dispatch => {
  return({
    fetchProjects: (communityId) => dispatch(fetchProjects(communityId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);