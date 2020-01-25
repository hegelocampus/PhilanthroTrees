import React from 'react';
import { Formik, Form, Field } from 'formik';
import RenderErrors from '../../../util/render_errors';
import { useDispatch } from 'react-redux';
import { login, signup } from "../../../actions/session_actions";

const GUEST_LOGIN = {
  email: "test@test.com",
  password: "testpass1"
};

export default ({ formType }) => {
  const dispatch = useDispatch();
  const process = (formType === 'login' ? login : signup);
  return (
    <React.Fragment>
      <RenderErrors />
      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
          password2: ""
        }}
        onSubmit={values => dispatch(process(values))}
        render={({ errors, status, touched }) => (
          <Form className="session-form">
            {formType === 'signup' && (
              <React.Fragment>
                <p> Username must be between 2 and 30 characters. Choose wisely! Other members of your community will be able to see </p>
                <Field
                  name='username'
                  placeholder='Username'
                  type='text'
                />
              </React.Fragment>
            )}
            <Field
              name='email'
              placeholder='E-mail'
              type='email'
            />
            <Field
              name='password'
              placeholder='Password'
              type='password'
              required
            />
            {formType === 'signup' ? (
              <>
                <Field
                  name='password2'
                  placeholder='Confirm Password'
                  type='password'
                />
                <button
                  type='submit'
                  className="big-button"
                >
                  Create Account
                </button>
              </>
            ):(
              <>
                <button
                  type='submit'
                  className="big-button"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    dispatch(login(GUEST_LOGIN))
                  }}
                  className="big-button"
                >
                  Guest Login
                </button>
              </>
            )}
          </Form>
        )}
      />
    </React.Fragment>
  );
}

