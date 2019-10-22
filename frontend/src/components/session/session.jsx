import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CLEAR_ERRORS } from '../../actions/session_actions';

import SessionForm from './session_form_container.js';

export default (props) => {
  const [formType, setFormType] = useState("login");
  const dispatch = useDispatch();

  const changeForm = (type) => {
    return (e) => {
      e.preventDefault();
      setFormType(type);
      dispatch({ type: CLEAR_ERRORS });
    }
  }

  let headerContent, footer;
  if (formType === 'login') {
    headerContent = "Sign In";
    footer = (
      <span>Don't have an account?
        <a href='#' onClick={changeForm("signup")} >
          Sign up
        </a>
      </span>
    )
  } else {
    headerContent = "Sign up";
    footer = (
      <span>Already have an account?
        <a href='#' onClick={changeForm("login")} >
          Sign In
        </a>
      </span>
    );
  }

  return (
    <div className="session-content">
      <div className="session-header">
        <h3 className="session-header-title">
          {headerContent}
        </h3>
      </div>
      <SessionForm formType={formType} />
      <div className="session-content-secondary">
        {footer}
      </div>
    </div>
  );
}