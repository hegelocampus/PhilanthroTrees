import { combineReducers } from "redux";
import errors from "./errors_reducer";
import session from "./session_reducer";
import entities from "./entities_reducer";

const RootReducer = combineReducers({
  entities,
  errors,
  session
});

export default RootReducer;

