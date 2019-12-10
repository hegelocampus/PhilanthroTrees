import React, { useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import useActionOnOutsideClick from '../../hooks/action_on_outside_click';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { logout } from "../../../actions/session_actions";

export default (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.entities.users[state.session.user.id]);
  const [visable, setVisable] = useState(false);
  const dropDown = useRef(null);


  useActionOnOutsideClick(dropDown, () => setVisable(false));

  return (
    <div className="top-menu-user-menu-wrapper-last" ref={ dropDown }>
      <Link to='/sign-out' onClick={() => dispatch(logout())} className="top-menu-item">
        Sign Out
        </Link>
     
    </div>
  )
}

