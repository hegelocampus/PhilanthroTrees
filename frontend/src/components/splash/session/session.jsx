import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

export default (props) => {
  const [formType, setFormType] = useState("signup");
  const changeForm = (type) => {
    return (e) => {
      setFormType(type);
    }
  }

  let headerContent, footer;
  if (formType === 'login') {
    headerContent = "Sign In";
    footer = (
      <span className="switch-form">
        Don't have an account?
        <Link
          to="/home/signup"
          onClick={changeForm("signup")}
        >
          Sign Up
        </Link>
      </span>
    )
  } else {
    headerContent = "Sign Up For Free";
    footer = (
      <span className="switch-form">
        Already have an account?
        <Link
          to="/home/login"
          onClick={changeForm("login")}
        >
          Sign In
        </Link>
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

