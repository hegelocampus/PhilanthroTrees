import React, { useEffect } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { CLEAR_ERRORS } from '../actions/session_actions';

export const RenderErrors = (props) => {
  const dispatch = useDispatch();

  let errors = useSelector(state => {
    if (state.errors) {
      return Object.values(state.errors).map((error, idx) => {
        return <p key={idx}>{Object.values(error)[0]}</p>
      });
    }
  });

  useEffect(() => {
    return () => dispatch({ type: CLEAR_ERRORS });
    },
    [dispatch]
  );

  return (
    <div className="form-errors-container">
      {errors}
    </div>
  );
}

