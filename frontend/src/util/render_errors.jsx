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

  let errors = useSelector(({ errors }) => {
    if (errors) {
      return Object.values(errors).map((error, idx) => {
        let errorArr = Array.isArray(error) ? error : Object.values(error);
        console.log(errorArr);
        if (errorArr[0]) {
          return <p key={idx}>{errorArr[0].toString()}</p>
        } else {
          return null;
        }
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

