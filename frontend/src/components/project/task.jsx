import React from 'react'

class Task extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      completed: false
    }
    
    this.submitTask = this.submitTask.bind(this);
  }

  submitTask(e){
    e.preventDefault();
    this.props.updateTask(this.state);
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
    console.log(this.props.updateTask);
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
