import React, { useState } from 'react';

import SessionForm from './session_form_container.js';

export default (props) => {
  const [formType, setFormType] = useState("login");

  const changeForm = (type) => {
    return (e) => {
      e.preventDefault();
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
