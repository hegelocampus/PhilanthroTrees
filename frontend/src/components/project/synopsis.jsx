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
      <p>
        TASK HERE!
      </p>
    )
  }
}

export default Synopsis;