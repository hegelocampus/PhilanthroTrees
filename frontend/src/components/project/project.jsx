import React from 'react';
import RenderErrors from '../../util/render_errors';

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

    if(this.props.projectId){
      
    }


    //Ensure Project Pops have Populated
    if(this.state.name){


    }




    return(
      <React.Fragment>
        <RenderErrors/>


      </React.Fragment>
    )

  }

}