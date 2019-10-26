import React, { useEffect, } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { userInvite } from '../../../actions/user_actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default (props) => {
  const dispatch = useDispatch();

  const currentUserId = useSelector(state => state.session.user.id);
  const currentUser = useSelector(state => state.entities.users[currentUserId]);
  const community = useSelector(state =>{

    if (state.entities.community){
      return({
        id: state.entities.community.id,
        name: state.entities.community.name
      })
    }
  });

  
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          emailAddress: '',
          id: community.id,
          name: community.name
        }}
        validate={values => {
          let errors = {};
          if (!values.emailAddress) {
            errors.emailAddress = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]/i.test(values.emailAddress)
          ) {
            errors.emailAddress = 'Invalid email';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(userInvite(values.emailAddress, values)).then(
            () => {
              setSubmitting(false);
            }
          );
        }}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form>
            <Field type="emailAddress" name="emailAddress" />
            <ErrorMessage name="emailAddress" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Send Invite
            </button>
          </Form>
        )}
      />
    </React.Fragment>
  );

}