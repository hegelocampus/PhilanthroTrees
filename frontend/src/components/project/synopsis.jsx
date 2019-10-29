import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

export default (props) => {
  const dispatch = useDispatch();
  let { projectId } = useParams();
  const project = useSelector(state => state.entities.projects[projectId]);

  return project ? (
    <div className="project-synopsis">
      <h1 className="project-name">
        {project.name}
      </h1>

      <p className="project-desc">
        {project.description}
      </p>

      <p className="project-health">
        HEALTH: {project.projectHealth}
      </p>

      <p className="project-exp">
        EXP: {project.projectExp}
      </p>

      <img className="project-plant" src="" alt="" />
    </div>
  ) : null
}

