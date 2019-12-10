import React, { useState } from 'react';
import ProjectForm from './project_form';

export default ({project}) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <React.Fragment>
      {project ? (
        <button
          id="show-button-edit"
          onClick={() => setShowForm(!showForm)}
        >
          Edit Project!
        </button>
      ) : (
        <button
          id="show-button-create"
          onClick={() => setShowForm(!showForm)}
        >
          New Project!
        </button>
      )}
      {showForm && <ProjectForm project={project} setShowForm={setShowForm} />}
    </React.Fragment>
  );
}

