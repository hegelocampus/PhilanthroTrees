import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default (props) => {
  return (
    <React.Fragment>
      <Formik
        initialValues={{ name: '' }}
        validate={values => {
          let errors = {};
          if (!values.name) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.name)
          ) {
            errors.name = 'Invalid community name';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}>
        {({ isSubmitting }) => (
          <Form>
            <Field type="name" name="name" />
            <ErrorMessage name="name" component="div" />
            <button type="submit" disabled={ isSubmitting }>
              Create new community
            </button>
          </Form>
        )}
        </Formik>
      />
    </React.Fragment>
  );
}

