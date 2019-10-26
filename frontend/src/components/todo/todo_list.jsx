import React from 'react'
import { Link } from 'react-router-dom'; 

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
      let communityId = this.props.users[this.props.currentUser.id] ?
        this.props.users[this.props.currentUser.id].communityId : null;

      if (communityId &&
         !this.checkNotEmpty(this.props.projects) 
         && (this.state.projectCheck < 2)) {
        this.state['projectCheck'] = this.state['projectCheck'] + 1 
        this.props.fetchProjects(communityId);
      }
    }
  }

  checkNotEmpty(object) {
    for (const key in object) {
      if (object.hasOwnProperty(key))
        return true;
    }
    return false;
  }

  render(){

    let projects = <p>Join a Community to get some Projects!</p>;

    if(this.checkNotEmpty(this.props.projects)){
      projects = Object.values(this.props.projects).map(project =>{
        return(
          <li key={project._id}>
            <Link to={`/projects/${project._id}`}>
            {project.name}
            </Link>
          </li> 
        )
      })
    }


    return(
      <React.Fragment>
        {projects}
      </React.Fragment>
    )
  }
}

export default TodoList;
