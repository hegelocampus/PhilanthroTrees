import React from 'react';
import RenderErrors from '../../util/render_errors';
import Task from './task';
import Synopsis from './synopsis';
import EditProject from './edit_project';
import CreateTask from './create_task';

class Project extends React.Component{
  constructor(props){
    super(props);


    this.state = {
      taskCreate: false,
      projectUpdate: false
    }

    this.checkNotEmpty = this.checkNotEmpty.bind(this);
    this.showForm = this.showForm.bind(this);
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

  showForm(field){
    return (e) =>{
    // e.preventDefault();
    let set = this.state[field] ? false : true;
    this.setState({[field]: set });
    }
  }


  render(){

    let synopsis = <p></p>;
    let tasks =<p></p>;
    let showCreate = <p></p>;
    let newTask= <p></p>
    let showEdit = <p></p>;
    let newEdit = <p></p>;

    //Ensure Project Pops have Populated
    if(this.checkNotEmpty(this.props.project)){
      synopsis = <Synopsis
       project={this.props.project}
       />

      showCreate = <button onClick={this.showForm("taskCreate")}>New Task!</button>

     

      newTask = this.state.taskCreate ? <CreateTask
      projectId={this.props.match.params.projectId}
      createTask={this.props.createTask}/> : <p></p>;


      showEdit = <button onClick={this.showForm("projectUpdate")}>Edit Project!</button>

       newEdit = this.state.projectUpdate ? <EditProject
       project={this.props.project}
       updateProject={this.props.updateProject}
       /> : <p></p>;
    }

    if(this.checkNotEmpty(this.props.tasks)){
      tasks = Object.values(this.props.tasks).map(task => {
        if (!task.completed) {
         return ( 
         <Task task={task} 
          project={this.props.project}
          updateTask={this.props.updateTask}
          updateProject={this.props.updateProject} 
          />
          )
        }
      })}


    return(
      <React.Fragment>
        <RenderErrors/>
        {synopsis}
        <ul className="project-tasks">
          {tasks}
        </ul>
        {showCreate}
        {newTask}
        {showEdit}
        {newEdit}
      </React.Fragment>
    )
  }
}

export default Project;
