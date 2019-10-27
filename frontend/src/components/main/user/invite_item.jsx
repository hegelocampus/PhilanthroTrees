import React from 'react'

class InviteItem extends React.Component{
  constructor(props){
    super(props);


    this.state ={
      accept: false
    }
    this.submit = this.submit.bind(this);
  }

  submit(){
    e.preventDefault();

    if (this.state.accept){
      let user = this.props.currentUser;
      user['communityId'] = this.props.pending.id;

      this.props.updateUser(user);
      this.props.addUserToCommunity(this.props.currentUser.id, this.props.pending.id);
    }
    else{
      let user = this.props.currentUser;
      user['pendingInvites'].forEach(invite => {
        if(invite.id === this.props.pending.id){
          delete invite;
        }
      });

      this.props.updateUser(user);
    }
  }

  update(field){
    return(e)=>{
      this.setState({accept: field},()=> this.submit())
    }
  }


  render(){

    return(
      <form>

        <p>Accept this Invite?</p>

        <input type="submit" value="Accept"
          onClick={this.update(true)}
        />
        <input type="submit" value="Decline"
            onClick={this.update(false)}
        />

      </form>
    )
  }
}