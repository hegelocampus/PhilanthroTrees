import React from 'react';
import RenderErrors from '../../util/render_errors';
import Task from './task';
import Synopsis from './synopsis';

class Project extends React.Component{
  constructor(props){
    super(props);

    // this.state ={
    //   name: "",
    //   description: "",
    //   plant: "",
    //   communityId: ""
    // }
    this.checkNotEmpty = this.checkNotEmpty.bind(this);
  }

  componentDidMount(){
    let projectId = this.props.match.params.projectId;
    this.props.fetchProject(projectId);
    this.props.fetchTasks(projectId);
  }

  checkNotEmpty(object) {
    for (const key in object) {
      if (object.hasOwnProperty(key))
        return true;
    }
    return false;
  }


  render(){

    let synopsis = <p></p>;

    //Ensure Project Pops have Populated
    if(this.checkNotEmpty(this.props.project)){
      synopsis = <Synopsis
       project={this.props.project}
       />
    }


    return(
      <React.Fragment>
        <RenderErrors/>
        {synopsis}
        <Task/>

      </React.Fragment>
    )

  }

}

export default Project;