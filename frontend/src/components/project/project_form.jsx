import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { updateProject } from '../../actions/project_actions';

export default ({ project, setShowForm }) => {
  const dispatch = useDispatch();
  /* All properties of project, need to retain in case we add a new project
   * form
  let oldState = {
    _id: this.props.project._id,
    name: this.props.project.name,
    description: this.props.project.description,
    plant: this.props.project.plant,
    communityId: this.props.project.communityId,
    projectHealth: this.props.project.projectHealth,
    projectExp: this.props.project.projectExp
  }
  */
  return(
    <Formik
      initialValues={project}
      onSubmit={values => dispatch(updateProject(values)).then(() => {
        setShowForm(false);
      })}
    >
      <Form className="project-edit">
        <Field
          name="name"
          className="name"
          type="text"
          placeholder="Name"
        />
        <Field
          name="description"
          className="description"
          type="text"
          placeholder="Description"
        />
        <Field
          component="select"
          name="plant"
          id="plant"
          placeholder="Select a plant"
        >
          <option id="project-option-1" value="bamboo">Bamboo</option>
          <option id="project-option-2" value="carrot">Carrot</option>
          <option id="project-option-3" value="pumpkin">Pumpkin</option>
          <option id="project-option-4" value="violet">Violet</option>
          <option id="project-option-5" value="fern">Fern</option>
          <option id="project-option-5" value="beet">Beet</option>
        </Field>/>
        <button id="update-button-edit" type="submit">
          UPDATE!
        </button>
      </Form>
    </Formik>
  )
}

