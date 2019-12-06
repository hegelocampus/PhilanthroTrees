import React from 'react';
import RenderErrors from '../../util/render_errors';
import Task from './task';
import Synopsis from './synopsis';
import EditProject from './edit_project';
import CreateTask from './create_task';
import '../../stylesheets/project_form.scss';

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

    if (projectId) {
      this.props.fetchProject(projectId);
      this.props.fetchTasks(projectId);
    }
  }

  // componentDidUpdate(){
  //   let projectId = this.props.match.params.projectId;
  //   if(!this.checkNotEmpty(this.props.project)){
  //     this.props.fetchProject(projectId);
  //   }
  // }


  checkNotEmpty(object) {
    for (const key in object) {
      if (object.hasOwnProperty(key))
        return true;
    }
    return false;
  }

  showForm(field){
    return (e) =>{
    e.preventDefault();
    let set = this.state[field] ? false : true;
    this.setState({[field]: set });
    }
  }

  render(){
    let synopsis=   <p></p>;
    let tasks=      <p></p>;
    let showCreate= <p></p>;
    let newTask=    <p></p>;
    let showEdit=   <p></p>;
    let newEdit=    <p></p>;

    synopsis = (
      <Synopsis
        project={this.props.project}
      />
    )

    //Ensure Project Pops have Populated
    if(this.checkNotEmpty(this.props.project)){
      synopsis = (
        <Synopsis
          project={this.props.project}
        />
      )

      showCreate = <button id="show-button-create" onClick={this.showForm("taskCreate")}>New Task!</button>

      newTask = this.state.taskCreate ? (
        <CreateTask
          projectId={this.props.match.params.projectId}
          createTask={this.props.createTask}
        />
      ) : (
        <p></p>
      );

      showEdit = <button id="show-button-edit" onClick={this.showForm("projectUpdate")}>Edit Project!</button>

      newEdit = this.state.projectUpdate ? (
        <EditProject
           project={this.props.project}
           updateProject={this.props.updateProject}
         />
      ) : (
        <p></p>
      )

    }

    if (this.checkNotEmpty(this.props.tasks) && this.checkNotEmpty(this.props.users)){
      tasks = Object.values(this.props.tasks).map(task => {
        return task.completed ? (
          null
        ) : (
          <Task task={task}
            key={task._id}
            users= {this.props.users}
            currentUser={this.props.currentUser}
            project={this.props.project}
            updateTask={this.props.updateTask}
            updateProject={this.props.updateProject}
            updateUser ={this.props.updateUser}
          />
        )
      })
    }

    return(
      <React.Fragment>
        {synopsis}
        <ul className="project-tasks">
          {tasks}
        </ul>
        {showCreate}
        {newTask}
        {showEdit}
        {newEdit}
        <RenderErrors/>
      </React.Fragment>
    )
  }
}

export default Project;

