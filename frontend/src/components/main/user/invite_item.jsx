import React from 'react';
import '../../../stylesheets/community_details.scss';

class InviteItem extends React.Component{
  constructor(props){
    super(props);


    this.state ={
      accept: false
    }
    this.submit = this.submit.bind(this);
  }

  submit(e){
    e.preventDefault();

    if (this.state.accept){
      let user = this.props.currentUser;
      user['communityId'] = this.props.pending.id;

      user['pendingInvites'].forEach((invite, idx) => {
        if (invite.id === this.props.pending.id) {
          if (idx === 0) {
            user['pendingInvites'].shift();
          } else {
            user['pendingInvites'].slice(idx).concat(
              user['pendingInvites'].slice(idx + 1)
            )
          }
        }
      });

      this.props.updateUser(user);
      this.props.addUserToCommunity(this.props.currentUser.id, this.props.pending.id);
    }
    else{
      let user = this.props.currentUser;
      
      user['pendingInvites'].forEach((invite, idx) => {
        if (invite.id === this.props.pending.id) {

          if (idx===0){
            user['pendingInvites'].shift();
          }else{
            user['pendingInvites'].slice(idx).concat(
              user['pendingInvites'].slice(idx + 1)
              )
          }
        }
      });

      this.props.updateUser(user);
    }
  }

  update(field){
    return(e)=>{
      this.setState({accept: field},()=> this.submit(e))
    }
  }


  render(){

    return(
      <form className="invite-form">

        <p>Accept this Invite?</p>

        <input id="invite-button-accept"
         type="submit" value="Accept"
          onClick={this.update(true)}
        />
        <input id="invite-button-decline"
         type="submit" value="Decline"
            onClick={this.update(false)}
        />

      </form>
    )
  }
}

export default InviteItem;