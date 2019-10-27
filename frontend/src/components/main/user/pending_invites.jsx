import React from 'react'

class PendingInvites extends React.Component {
  constructor(props){
    super(props)
  }

  


  render(){

    let pending;
    pending =  this.props.pendingInvites ? 
      <ul>
      {Object.values(this.props.pendingInvites).map(pending=>{
        return(
          <InviteItem
          key={this.props.pending.id}
          currentUser = {this.props.currentUser}
          pending={pending}
          updateUser={this.props.updateUser}
          addUserToCommunity={this.props.addUserToCommunity}
          />
        )
      })}
    </ul> : <p>You have no pending invitations.</p>
    
    
    return(
      <React.Fragment>
        {pending}
      </React.Fragment>
    )
  
  }
}