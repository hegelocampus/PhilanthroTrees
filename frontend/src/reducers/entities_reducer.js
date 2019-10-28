import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import projectsReducer from './projects_reducer';
import tasksReducer from './tasks_reducer';
import communitiesReducer from './communities_reducer';
import inviteReducer from './invite_reducer';

export default combineReducers({
  users: usersReducer,
  community: communitiesReducer,
  projects: projectsReducer,
  tasks: tasksReducer,
  invite: inviteReducer
});

