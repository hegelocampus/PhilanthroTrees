import {connect} from 'react-redux';
import {userInvite} from '../../../actions/user_actions';
import Invite from './user_invitation';


const mapStateToProps = state =>{
return({
  community: state.entities.community
})
}

const mapDispatchToProps = dispatch=>{
  return({
    userInvite: (emailAddress, pendingInvite) => dispatch(userInvite(emailAddress, pendingInvite))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Invite);