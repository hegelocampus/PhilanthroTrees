import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Sprite from '../main/sprites/sprite';

export default (props) => {
  const dispatch = useDispatch();
  let { projectId } = useParams();
  const project = useSelector(state => state.entities.projects[projectId]);
  let plantLvl
  if (project) {
    plantLvl = Math.floor((project.projectExp + 50) / 50);
  }

  console.log(plantLvl);
  console.log(project);

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

      <Sprite level={ plantLvl } type={ "bell" || null } />
    </div>
  ) : null
}

