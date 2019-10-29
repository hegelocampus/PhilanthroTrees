import React from 'react';

class EditProject extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      _id: this.props.project._id,
      name: this.props.project.name,
      description: this.props.project.description,
      plant: this.props.project.plant,
      communityId: this.props.project.communityId,
      projectHealth: this.props.project.projectHealth,
      projectExp: this.props.project.projectExp
    }


    this.submit = this.submit.bind(this);
  }

  submit(e){
    e.preventDefault();
    this.props.updateProject(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  render(){
    return(
    <form className="project-edit" onSubmit={this.submit}>

      <input className="name" type="text"
       value={this.state.name} onChange={this.update('name')}/>


      <input className="description" type="text"
       value={this.state.description} onChange={this.update('description')}/>

      <select id="plant" onChange={this.update('plant')}>
        <option id="project-option-1" value="plant1">Plant 1 Image</option>
          <option id="project-option-2" value="plant2">Plant 2 Image</option>
          <option id="project-option-3" value="plant3">Plant 3 Image</option>
      </select>/>

      <button id="update-button" type="submit">UPDATE!</button>
 
    </form>
    )
  }
}

export default EditProject;