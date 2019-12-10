import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CreateTask from './create_task';

export default ({task}) => {
  const [showForm, setShowForm] = useState(false);
  const { projectId } = useParams();

  return (
    <React.Fragment>
      {task ? (
        <button
          id="show-button-edit"
          onClick={() => setShowForm(!showForm)}
        >
          Edit
        </button>
      ) : (
        <button
          id="show-button-create"
          onClick={() => setShowForm(!showForm)}
        >
          Add Task!
        </button>
      )}
      {showForm && <CreateTask projectId={projectId} setShowForm={setShowForm} />}
    </React.Fragment>
  );
}

