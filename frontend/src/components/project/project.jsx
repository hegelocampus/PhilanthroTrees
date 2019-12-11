import React, { useEffect } from 'react';
import RenderErrors from '../../util/render_errors';
import Task from './task';
import { useParams } from 'react-router-dom';
import Synopsis from './synopsis';
import ToggleTaskForm from './toggle_task_form_button';
import ToggleProjectForm from './toggle_project_form_button';
import '../../stylesheets/project_form.scss';

export default ({
  project,
  tasks,
  users,
  currentUser,
  fetchProject,
  updateProject,
  fetchTasks,
  updateTask,
  updateUser
}) => {
  const { projectId } = useParams();

  useEffect(() => {
    if (projectId !== undefined) {
      fetchProject(projectId);
      fetchTasks(projectId);
    }
  },
    [projectId, fetchProject, fetchTasks]
  );

  return(
    <React.Fragment>
      {(project) ? (
        <>
          <Synopsis
            project={project}
          />
          <ToggleTaskForm />
          <ToggleProjectForm project={project} />
          <ul className="project-tasks">
            {Object.values(tasks).map(task => !task.completed && (
              <Task task={task}
                key={task._id}
                users= {users}
                currentUser={currentUser}
                project={project}
                updateTask={updateTask}
                updateProject={updateProject}
                updateUser ={updateUser}
              />
            ))}
          </ul>
          <h3 className="completed-tasks">Completed Tasks:</h3>
          <ul className="project-tasks">
            {Object.values(tasks).map(task => task.completed && (
              <Task task={task}
                key={task._id}
                users= {users}
                currentUser={currentUser}
                project={project}
                updateTask={updateTask}
                updateProject={updateProject}
                updateUser ={updateUser}
              />
            ))}
          </ul>
        </>
      ) : (
        <span>Loading...</span>
      )}
      <RenderErrors />
    </React.Fragment>
  )
}

