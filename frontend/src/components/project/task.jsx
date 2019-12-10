import React from 'react'
import { Formik, Form, Field } from 'formik';
import '../../stylesheets/task_card.scss';

export default ({ users, currentUser, project, task, updateTask, updateUser, updateProject }) => (
  <li>
    <h4 id="task-title">{task.title}</h4>
    <p id="task-details">{task.details}</p>
    <p>Task status: {task.completed ? "Done!" : "Unfinished"}</p>
    <Formik
      initialValues={{
        completed: task.completed
      }}
      onSubmit={values => {
        project['projectExp'] = project['projectExp'] + 10;

        let user = users[currentUser.id];

        user['experience'] += 20;

        updateTask({ ...task, completed: true });
        updateProject(project);
        updateUser(user);
      }}
      validate={values => {
        const errors = {};
        if (values.completed === false) {
          errors.completed = "Please confirm confim before submitting";
        }
        return errors;
      }}
    >
      {({values}) => (
        <Form>
          <label>
            <Field
              name="completed"
              placeholder="completed"
              type="checkbox"
              value="Completed"
            />
            Completed
          </label>
          <button
            type="submit"
            class="task-submit-button"
            disabled={!values.completed}
          >
            "Done!"
          </button>
        </Form>
      )}
    </Formik >
  </li>
)

