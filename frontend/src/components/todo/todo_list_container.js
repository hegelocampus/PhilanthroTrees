import { connect } from 'react-redux';

import TodoList from './todo_list';

const mapStateToProps = state =>{
  let currentUser = state.session && state.session.user;

  return({
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