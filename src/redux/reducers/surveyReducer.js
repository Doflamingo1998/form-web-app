import * as types from "../actions/types";

const initialState = {
  surveys: [],
  error: null
};

const surveyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_SURVEY_SUCCESS:
      return { ...state, error: null };
    case types.CREATE_SURVEY_FAILURE:
      return { ...state, error: action.payload };
    case types.GET_SURVEYS_SUCCESS:
      return { ...state, surveys: action.payload };
    case types.GET_SURVEYS_FAILURE:
      return { ...state, error: action.payload };
    case types.LIST_SURVEY_SUCCESS:
      return { ...state, surveys: action.payload };
    case types.LIST_SURVEY_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default surveyReducer;
