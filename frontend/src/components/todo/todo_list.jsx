import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/todo.scss';

export default ({ users, currentUser, projects, fetchProjects })=> {
  useEffect(() => {
    let communityId;
    if (users[currentUser.id]) {
      communityId = users[currentUser.id].communityId;
    }
    fetchProjects(communityId);
  },
    [users, currentUser, fetchProjects]
  )

  return(
    <div className="todo-container">
      <h2>Current Projects</h2>
      {Object.values(projects).length ? (
        <ul className="todo">
          {Object.values(projects).map(project => (
            <li
             key={project._id}>
              <Link className="todo-link" to={`/projects/${project._id}`}>
              {project.name}
              </Link>
            </li>
          ))}

        </ul>
      ) : (
        <span>Join a community in order to start completing tasks</span>
      )}
    </div>
  )
}

