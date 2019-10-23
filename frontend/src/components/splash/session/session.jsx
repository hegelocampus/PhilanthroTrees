import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import SessionForm from './session_form_container.js';

export default (props) => {
  const [formType, setFormType] = useState("signup");
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
      <a className="switch-form" onClick={changeForm("signup")}>Don't have an account? <span>Sign Up</span></a>
    )
  } else {
    headerContent = "Sign Up For Free";
    footer = (
      <a className="switch-form" onClick={changeForm("login")}>Already have an account? <span>Sign In</span></a>
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
