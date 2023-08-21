import { surveyAPI } from "../../services/api";
import * as types from "./types";

export const createSurveySuccess = () => {
  return {
    type: types.CREATE_SURVEY_SUCCESS
  };
};

export const createSurveyFailure = (error) => {
  return {
    type: types.CREATE_SURVEY_FAILURE,
    payload: error
  };
};

export const createSurvey = (survey) => {
  return async (dispatch) => {
    try {
      await surveyAPI.createSurvey(survey);
      dispatch(createSurveySuccess());
    } catch (error) {
      dispatch(createSurveyFailure(error));
    }
  };
};
