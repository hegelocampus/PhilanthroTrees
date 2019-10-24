import React from 'react'
import { Link } from 'react-router-dom'; 

class TodoList extends React.Component{

  constructor(props){
    super(props);

    this.checkNotEmpty = this.checkNotEmpty.bind(this);

  }

  componentDidMount(){
    let communityId = this.props.currentUser.communityId
    this.props.fetchProjects(communityId);
  }

  checkNotEmpty(object) {
    for (const key in object) {
      if (object.hasOwnProperty(key))
        return true;
    }
    return false;
  }

  render(){

    let projects = <p></p>;

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