import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { createTask } from '../../actions/task_actions';

export default ({ setShowForm }) => {
  const dispatch = useDispatch();
  const { projectId } = useParams();

  return (
    <Formik
      initialValues={{ title: '', details: '' }}
      onSubmit={values => dispatch(createTask(projectId, values)).then(() => {
        setShowForm(false)
      })}
    >
      <Form className="create-task">
        <Field
          name='title'
          className='title'
          type='text'
          placeholder='Task Title'
        />
        <Field
          name='details'
          className='details'
          type='text'
          placeholder='Task Description'
        />
        <button type='submit' id='update-button-create'>
          Create Task!
        </button>
      </Form>
    </Formik >
  )
}

