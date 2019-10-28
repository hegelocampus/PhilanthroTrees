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
    <div className="top-menu-user-menu-wrapper" ref={ dropDown }>
      <button className="top-menu-user-menu"
        onClick={ () => visable ? setVisable(false) : setVisable(true) }
      >
        User
      </button>
      { visable ? (
        <ul className="top-menu-user-menu-list">
          <li>
            <Link to={ `/user/${ currentUser.id }` } className="display-name">
              { currentUser.username }
            </Link>
          </li>
          <li>
            <Link to='/sign-out' onClick={ () => dispatch(logout()) } className="user-menu-link">
              Sign Out
            </Link>
          </li>
        </ul>
      ) : (
        null
      )
    }
    </div>
  )
}

