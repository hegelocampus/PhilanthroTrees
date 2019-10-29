import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Line } from 'rc-progress';
import '../../stylesheets/synopsis.scss'
// import { fetchProject } from '../../actions/project_actions';

export default (props) => {
  // const dispatch = useDispatch();
  let { projectId } = useParams();
  const project = useSelector(state => state.entities.projects[projectId]);

  return project ? (
    <div className="project-synopsis">
      {/* <h1 className="project-name">
        {project.name}
      </h1> */}

      <h2 className="project-desc">
        {project.description}
      </h2>

      <s>Level: {Math.floor((project.projectExp + 50) / 50)} </s>

      <div>
        <p className="project-health">
          HP:
        </p>
        <Line
          percent={project.projectHealth}
          strokeColor='#a04946'
          className="health-bar"
        />
        <span>{`${project.projectHealth} / 100`}</span>
      </div>

    
      <div className="project-stats-li">
        <p className="project-exp">
          EXP:
        </p>
        <Line
          percent={((project.projectExp + 50) % 50) * 2}
          strokeColor='#4946a0'
          className="experience-bar"
        />
        <span>{`${project.projectExp % 100} / 100`}</span>
      </div>



      <img className="project-plant" src="" alt="" />
    </div>
  ) : null
}

