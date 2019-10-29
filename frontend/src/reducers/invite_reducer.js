import { RECEIVE_INVITE } from '../actions/user_actions';


export default (state={}, action)=>{
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_INVITE:
      return action.invite;

    default:
      return {} ;
  }
}