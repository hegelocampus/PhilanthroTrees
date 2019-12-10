import React from 'react'
import { Link } from 'react-router-dom';

import '../../stylesheets/todo.scss';

class TodoList extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      projectCheck: 0
    }
    this.checkNotEmpty = this.checkNotEmpty.bind(this);
  }

  componentDidUpdate(){
    if (this.checkNotEmpty(this.props.users)) {
      let communityId
      if (this.props.users[this.props.currentUser.id]) {
        communityId = this.props.users[this.props.currentUser.id].communityId;
      }

      if (communityId
        && !this.checkNotEmpty(this.props.projects)
        && (this.state.projectCheck < 2)) {
          this.state['projectCheck'] = this.state['projectCheck'] + 1
          this.props.fetchProjects(communityId);
        }
    }
  }

  checkNotEmpty(object) {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        return true;
      }
    }
    return false;
  }

  render(){

    let projects = <p>Join a Community to get some Projects!</p>;

    if(this.checkNotEmpty(this.props.projects)){
      projects = Object.values(this.props.projects).map(project =>{
        return(
          <li
           key={project._id}>
            <Link className="todo-link" to={`/projects/${project._id}`}>
            {project.name}
            </Link>
          </li>
        )
      })
    }

    return(
      <div className="todo-container">
        <ul className="todo">
          <h2>Current Projects</h2>
          {projects}
        </ul>
      </div>
    )
  }
}

export default TodoList;

