import React from 'react'
import InviteItem from './invite_item';

class PendingInvites extends React.Component {
  constructor(props){
    super(props)

    this.state={
      pendingInvites : "",
    }

    this.checkNotEmpty = this.checkNotEmpty.bind(this);

  }


  checkNotEmpty(object) {
    for (const key in object) {
      if (object.hasOwnProperty(key))
        return true;
    }
    return false;
  }


  componentDidUpdate(){
    if (this.checkNotEmpty(this.props.users)) {

      console.log('The users', this.props.users);
      console.log('The current user', this.props.users[this.props.currentUser.id]);

      let pendingInvites = this.props.users[this.props.currentUser.id] ?
        this.props.users[this.props.currentUser.id].pendingInvites : null;
        
        console.log('Updates pendingInvites:', pendingInvites);

      if (pendingInvites) {
        this.state['pendingInvites'] = pendingInvites;
      }
    }
  }
  
  render(){

    let pending;
    console.log(this.state.pendingInvites)
    pending =  this.state.pendingInvites ? 
      <ul>
      {Object.values(this.state.pendingInvites).map(pending=>{
        console.log('Invite passed to Item', pending);
        console.log('User passed to Item', this.props.users[this.props.currentUser.id]);
        return(
          <InviteItem
          key={pending.id}
          currentUser = {this.props.users[this.props.currentUser.id]}
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

export default PendingInvites;