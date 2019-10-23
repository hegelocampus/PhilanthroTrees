import React from 'react';
import RenderErrors from '../../util/render_errors';

class EditProject extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      name: this.props.project.name,
      description: this.props.project.description,
      plant: this.props.project.plant,
      communityId: this.props.project.communityId
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
    <form onSubmit={this.submit}>

      <input className="name" type="text"
       value={this.state.name} onChange={this.update('name')}/>


      <input className="description" type="text"
       value={this.state.description} onChange={this.update('description')}/>

      <select className="plant" onChange={this.update('plant')}>
        <option value="plant1">Plant 1 Image</option>
        <option value="plant2">Plant 2 Image</option>
        <option value="plant3">Plant 3 Image</option>
      </select>/>

      <button>UPDATE!</button>
 
    </form>
    )
  }
}

export default EditProject;