import React from 'react'

import React from 'react'

class Synopsis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.project.name,
      description: this.props.project.description,
      plant: this.props.project.plant,
      communityId: this.props.project.communityId
    }
  }

  render() {


    return (
      <div className="project-synopsis">
        <h1 className="project-name">
          {this.state.name}
        </h1>

        <p className="project-desc">
          {this.state.description}
        </p>

        <img className="project-plant" src="" alt="" />

      </div>
    )
  }
}

export default Synopsis;