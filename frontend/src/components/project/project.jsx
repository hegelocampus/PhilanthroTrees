import React from 'react';
import RenderErrors from '../../util/render_errors';
import Task from './task';

class Project extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      name: "",
      description: "",
      plant: "",
      communityId: ""
    }
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
      this.state.name = this.props.project.name
      this.state.description = this.props.project.description
      this.state.plant = this.props.project.plant
      this.state.communityId =this.props.project.communityId
    }


    //Ensure Project Pops have Populated
    if(this.state.name){


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