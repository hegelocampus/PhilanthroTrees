import React from 'react'

import '../../stylesheets/task_card.scss';

class Task extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      completed: false
    }
    this.user = this.props.currentUser;
    this.submitTask = this.submitTask.bind(this);
  }

  submitTask(e){
    e.preventDefault();

    let project = this.props.project;
    project['projectExp'] = project['projectExp'] + 10;

    let user = this.props.users[this.props.currentUser.id];

    console.log('Found the User:', user)

    user['experience'] = user['experience'] + 20;

    this.props.updateTask(this.state);
    this.props.updateProject(project);
    this.props.updateUser(user);
  }

  update(field) {
    return (e) => {
      // e.preventDefault();
      let set = this.state[field] ? false : true;
      this.setState({
        _id: this.props.task._id,
        title: this.props.task.title,
        details: this.props.task.details,
        [field]: set 
        });
    }
  }


  render(){
    return(
      <li key={this.props.task._id}>
        <form onSubmit={this.submitTask}>

          <h4 id="task-title">{this.props.task.title}</h4>
          <p id="task-details">{this.props.task.details}</p>
          <p>{this.props.task.completed ? "Done!" : "Unfinished"}</p>
          <label>
            <input type="radio" value="Completed"
            onClick = {this.update("completed")} 
            checked={this.state.completed}
            />
            Completed
          </label>

          <input type="submit"  value="Done!"/>

        </form>
      </li>
    )
  }
}

export default Task;
