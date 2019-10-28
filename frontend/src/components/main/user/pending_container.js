import {connect} from 'react-redux';
import { updateUser, requestUser } from '../../../actions/user_actions';
import { addUserToCommunity } from '../../../actions/community_actions';
import PendingInvites from './pending_invites';

const mapStateToProps = state =>{
  return{
    currentUser: state.session.user,
    users: state.entities.users,
  }
}

const mapDispatchToProps = dispatch =>{

  return({
    requestUser: (userId)=> dispatch(requestUser(userId)),
    updateUser: (user)=> dispatch(updateUser(user)),
    addUserToCommunity: (userId, communityId)=> dispatch(addUserToCommunity(userId, communityId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PendingInvites);