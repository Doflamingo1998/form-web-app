import { combineReducers } from "redux";
import authReducer from "./authReducer";
import surveyReducer from "./surveyReducer.js";

const rootReducer = combineReducers({
  auth: authReducer,
  survey: surveyReducer
});

export default rootReducer;
