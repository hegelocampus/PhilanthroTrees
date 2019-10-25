import React from 'react'
import { Link } from 'react-router-dom'; 

class TodoList extends React.Component{

  constructor(props){
    super(props);

    this.checkNotEmpty = this.checkNotEmpty.bind(this);
  }

  componentDidUpdate(){
    console.log('todo list updated');
    if (this.checkNotEmpty(this.props.users)) {
      console.log('at communityId maker');
      let communityId = this.props.users[this.props.currentUser.id] ?
        this.props.users[this.props.currentUser.id].communityId : null;

      if (communityId && !this.checkNotEmpty(this.props.projects)) {
        console.log("communityID:", communityId);
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
      console.log("The Projects:", this.props.projects)
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
