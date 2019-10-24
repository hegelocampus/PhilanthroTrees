import React from 'react'

class Task extends React.Component{
  render(){

    return(
      <li key={this.props.task._id}>
        <h4 id="task-title">{this.props.task.title}</h4>
        <p id="task-details">{this.props.task.details}</p>
      </li>
    )
  }
}

export default Task;