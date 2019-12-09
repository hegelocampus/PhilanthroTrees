import React from 'react';
import { createUserCommunity } from '../../../actions/community_actions';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default (props) => {
  const currentUserId = useSelector(state => state.session.user.id);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          name: ''
        }}
        validate={ values => {
          let errors = {};
          if (!values.name) {
            errors.name = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]/i.test(values.name)
          ) {
            errors.name = 'Invalid community name';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(createUserCommunity(currentUserId, values)).then(
            () => {
              setSubmitting(false);
              history.push('/');
            }
          );
        }}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form>
            <Field type="name" name="name" />
            <ErrorMessage name="name" component="div" />
            <button type="submit" disabled={ isSubmitting }>
              Create new community
            </button>
          </Form>
        )}
      />
    </React.Fragment>
  );
}

