import React, { useEffect } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { useLocation } from 'react-router-dom';
import { CLEAR_ERRORS } from '../actions/session_actions';

export default (props) => {
  const dispatch = useDispatch();
  const location = useLocation();

  let errors = useSelector(state => {
    if (state.errors) {
      return Object.values(state.errors).map((error, idx) => {
        return <p key={idx}>{Object.values(error)[0]}</p>
      });
    }
  });

  useEffect(() => {
    dispatch({ type: CLEAR_ERRORS });
    },
    [dispatch, location.pathname]
  );

  return (
    <div className="form-errors-container">
      {errors}
    </div>
  );
}

