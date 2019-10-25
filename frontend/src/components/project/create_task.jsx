import React from 'react';

class CreateTask extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      details: "",
    }
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    let projectId = this.props.projectId;
    this.props.createTask(projectId, this.state);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    return (
      <form className="create-task" onSubmit={this.submit}>

        <label>
        Task Title
        <input className="title" type="text"
          value={this.state.title} onChange={this.update('title')} />
        </label>

        <label>
        Task Description
        <input className="details" type="text"
          value={this.state.details} onChange={this.update('details')} />
        </label>

      <button type="submit">Create Task!</button>

      </form>
    )
  }
}

export default CreateTask;