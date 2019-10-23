import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import SessionForm from './session_form_container.js';

export default (props) => {
  const [formType, setFormType] = useState("login");
  let history = useHistory();

  const changeForm = (type) => {
    return (e) => {
      e.preventDefault();
      history.push(`/home/${type}`);
      setFormType(type);
    }
  }

  let headerContent, footer;
  if (formType === 'login') {
    headerContent = "Sign In";
    footer = (
      <span>Don't have an account?
        <button type="button" onClick={changeForm("signup")} >
          Sign up
        </button>
      </span>
    )
  } else {
    headerContent = "Sign up";
    footer = (
      <span>Already have an account?
        <button type="button" onClick={changeForm("login")} >
          Sign In
        </button>
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
