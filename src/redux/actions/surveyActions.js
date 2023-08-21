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

export const listSurveySuccess = (surveys) => {
  return {
    type: types.LIST_SURVEY_SUCCESS,
    payload: surveys
  };
};

export const listSurveyFailure = (error) => {
  return {
    type: types.LIST_SURVEY_FAILURE,
    payload: error
  };
};

export const listSurvey = () => {
  return async (dispatch) => {
    try {
      const surveys = await surveyAPI.listSurvey();
      dispatch(listSurveySuccess(surveys));
    } catch (error) {
      dispatch(listSurveyFailure(error));
    }
  };
};
