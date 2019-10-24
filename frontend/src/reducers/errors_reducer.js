import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import projectErrorsReducer from './projects_error_reducer';
import taskErrorsReducer from './task_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  projects: projectErrorsReducer,
  tasks: taskErrorsReducer
});