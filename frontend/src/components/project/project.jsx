import React from 'react';
import RenderErrors from '../../util/render_errors';
import Task from './task';
import Synopsis from './synopsis';
import EditProject from './edit_project';

class Project extends React.Component{
  constructor(props){
    super(props);

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

  componentDidUpdate(){
    
  }


  render(){

    let synopsis = <p></p>;
    let edit = <p></p>;
    let tasks =<p></p>;
    

    //Ensure Project Pops have Populated
    if(this.checkNotEmpty(this.props.project)){
      synopsis = <Synopsis
       project={this.props.project}
       />
       edit = <EditProject
       project={this.props.project}
       updateProject={this.props.updateProject}
       />
    }

    if(this.checkNotEmpty(this.props.tasks)){
      tasks = Object.values(this.props.tasks).map(task => <Task task={task} />)
    }


    return(
      <React.Fragment>
        <RenderErrors/>
        {synopsis}
        <ul className="project-tasks">
          {tasks}
        </ul>
        {edit}
      </React.Fragment>
    )
  }
}

export default Project;