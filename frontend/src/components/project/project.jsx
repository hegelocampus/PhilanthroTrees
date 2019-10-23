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
  }

  componentDidMount(){
    let projectId = this.props.match.params.projectId;
    this.props.fetchProject(projectId);
  }

  componentDidUpdate(){
    let projectId = this.props.match.params.projectId;
    this.props.fetchTasks(projectId);
  }


  render(){

    let synopsis = <p></p>;

    if(this.props.project.projectId){
      synopsis = <Synopsis
       project={this.props.project}
       />
    }


    //Ensure Project Pops have Populated
    if(this.state.name){
      synopsis = 
    }




    return(
      <React.Fragment>
        <RenderErrors/>
        
        <Task/>

      </React.Fragment>
    )

  }

}

export default Project;